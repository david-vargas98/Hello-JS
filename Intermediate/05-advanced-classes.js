//-------------------------------------------------------- advanced classes

// remember that the advanced objects is the methodology to create objects before classes, so now, we're going to do the same but using classes
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    greet(){
        console.log(`Hola, soy ${this.name}`)
    }
}

const person = new Person("Edgar", 26) // an instance of Person class
person.greet()

person.sayAge = function(){ // we can add/create methods as we did using deprecated objects approach
    console.log(`Tengo ${this.age} años.`)
}
person.sayAge()

// abstraction: it's a class that cannot be directly instantiated, it should be inherited, it could contain abstract (whitout implementation)
//  or concrete methods (with implementation), in summary, it helps us to define an structure

// example: to set an structure for an Animal
class Animal{
    constructor(name){
        if(new.target === Animal) // this avoids the class to be directly instantiated by using: new Animal
            throw new Error("You cannot instantiate an abstract class!")

        this.name = name
    }

    makeSound(){
        throw new Error("This method should be implemented by a sub-class.") // this avoids the class to use the methof directly
    }
}

// Since it's an abstract class, the following will throw an error:
// const animal = new Animal("Puppy")
// animal.makeSound()


// Polymorphism: it is a capability of the class, yes, but of the inherited classes that inherit from an abstract class
// so that, we can implement methods that have the same name but different behaviours
class Cat extends Animal{
    makeSound(){
        console.log("Meow!") // here we implement the makeSound() method, if we avoid the implementation it will throw the exception
    }
}

class Dog extends Animal{
    makeSound(){
        console.log("Wow!")
    }
}

const cat = new Cat("MyCat") // this Cat instance will inherit the name property and makeSound method from Animal class 
console.log(cat)
cat.makeSound()

const dog = new Dog("MyDog") // the same for Dog class
console.log(dog)
dog.makeSound()


// Mixins: it allows us to share functionalities between different classes but without using inheritance
const FlyMixin = { // a behaviour which we will use ahead
    fly(){
        console.log(`${this.name} is flying.`)
    }
}

// Imagine that we want to add the fly() behaviour, we can just copy

class BirdWhitoutMixin extends Animal{
    fly(){
        console.log("It's flying.")
    }
}

class DragonWhitoutMixin extends Animal{
    fly(){
        console.log("It's flying.")
    }
}

// but we don't want the above, neither inheriting from a father class,...that's why we use mixin, here we have the classes again:
class Bird extends Animal{

}

class Dragon extends Animal{
    
}

// in order to add the behaviour we use the assign to combine the class with the behaviour; we can do this apart of combining objects only
Object.assign(Bird.prototype, FlyMixin) // if we only use .assign(Bird, FlyMixin) is not gonna work, we need to access to hte protoype 

const bird = new Bird("EdgarBird")
console.log(bird.name)
bird.fly()

Object.assign(Dragon.prototype, FlyMixin) // the same thing, we add the FlyMixing method to the prototype
const dragon = new Dragon("EdgarDragon")
console.log(dragon.name)
dragon.fly()

//-------------------------------------------------------- design patterns

// design patterns are certain conventions that we can follow to solve common problems.


// singleton: it tries to solve the problem of multiple instances, so, singleton makes sure that a class can only be instantiated only once
// i.e. it will only exists a unique instance class, just one!; maybe the simplest, it fits perfecly with classes

class Session{ // it applies with a long in session, we want to preserve our unique session
    constructor(name){
        if(Session.instance) //this allows us to CONTROL the session creation
            return Session.instance // returns the session if exists
        this.name = name
        Session.instance = this // this associates the very FIRST instance to the "instance" property for the first time we log in
    }
}

const sessionOne = new Session("Edgar") // we instantiated and have accesed the session from one place within the application
console.log(sessionOne.name)

const sessionTwo = new Session() // we haven't given a name, even though returns the session, this tells us that there's only one Session instance
console.log(sessionTwo.name)

console.log(`Validating singleton | Is 'sessionOne' equals to 'sessionTwo'?: ${sessionOne === sessionTwo}`)


//-------------------------------------------------------- another mechanisms

// symbol: remember, is a primitive data type and represents A UNIQUE and IMMUTABLE IDENTIFIER
// it could help us to avoid collisions with the object property names

const ID = Symbol("id") // immutable and unique

class User{
    constructor(name){
        this.name = name
        this[ID] = Math.random() // the use of "ID" Symbol makes this property semi-private automatically
    }

    //besides the [ID] property can be partially modified, we use methods to prevent this as possible
    getId(){
        return this[ID]
    }
}

const user = new User("Edgar")
console.log(user.name)
console.log(user.ID) // we cannot access it like that
console.log(user[ID]) // but we can access it because we know its name, we are making reference to it

//so, if we modify the value like this:
user[ID] = 1234
console.log(user[ID]) // you can see that it was modified, that's why we say that this is a semi-private property, 
// because it can actually be modified, we only need to know its name to get access to it

console.log(user.getId())

// ------- this is the private JS specification before 2020, from that, the correct way to make properties  private is by using "#propertyName"


// instanceof: we use it to check if an object is an instance of a class
class Car{}

const car = new Car()

console.log(car === Car) // THIS IS WRONG, since returns false
console.log(car instanceof Car) // this is the RIGHT WAY

// create: another way used to create objects based on a specific prototype 
const anotherCar = Object.create(Car.prototype) // this creates a new empty object using the "Car" protoype, which means that "anotherCar" will 
                                                // inherit all properties and methods that have been set in "Car.prototype"

console.log(anotherCar instanceof Car)


// proxy: it's a mechanism that works to intercept and custumize the behaviour of the classes

// target: is the object instance itself; 
// property: the property name; 
// value: the value of the property 
const proxyHandler = { //this is our proxy
    get(target, property){ // get: has some parameters which we could access them
        console.log(target) // - the instance itself
        console.log(property) // - the property name
        console.log(`Se accede a la propiedad: '${property}'`) 
        return target[property] // the property value
    },
    set(target, property, value){ //set: as well as get, set has some parameters which we could access them
        console.log(target) // - the instance itself
        console.log(property) // - the property name
        console.log(value) // - the property value
        if(property === "balance" && value < 0)
            throw new Error("Balance can't be negative.") // exception if balance is less than 0
        target[property] = value // it changes the property value
        console.log(`New property value: ${target[property]}`)
        return true // this return is due to the program throws an error if the set does not return a truthy value, TypeError: 'set' on proxy
    }
}

class BankAccount{
    constructor(balance){
        this.balance = balance
    }
}

const account = new Proxy(new BankAccount(100), proxyHandler) // this says that the prozy will be applied for the Bankaccount
console.log(account.balance) // when this operation (get operation) is executed it displays "get" (look at the proxy)

account.balance = 50 // when this operation (set operation) is executed it displays "set" (look at the proxy)
console.log(account.balance)

account.balance = -10 // this throw the exception

// summary, we can implement security and some other validations within the class through a proxy, pretty cool, huh? 