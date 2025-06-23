//classes: we use them to create object templates, we define both properties and methods but without assigning their values

// definition: we use 'class' key word followed by '{}', and inside we define a special method 'constructor' to initialize properties
class Person{
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// sintaxis for instantiating a person object
let person = new Person("Edgar", 26, "ED")
console.log(person)
console.log(typeof person)

// default values
class DefaultPerson{
    constructor(name = "Default name", age = 25, alias = "No alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person2 = new DefaultPerson()
console.log(person2)

// properties access

console.log(person2.alias) //we access it by using dot notation
console.log(person2["alias"]) //we access it by using [] notation

person2["alias"] = "New alias"
console.log(person2["alias"]) //we can modify the propertie whenever we want to


// Functions (methods) within classes
class PersonWithMethod{
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk(){
        console.log(`La persona ${this.name} is walking.`)
    }
}

let person3 = new PersonWithMethod("Edgar", 26, "ED")
person3.walk()


//private properties
class PrivatePerson{
    #bank
    constructor(name, age, alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay(){
        this.#bank
    }
}

let person4 = new PrivatePerson("Edgar", 26, "ED", "BANK12345")

// we have no access to the property
// console.log(person4.#bank)

// we can try to 'modify' the property like this:
person4.bank = "new BANK12345" //however, 'bank' is not '#bank', hence, the private property stays the same
console.log(person4) //we see is a new property and it does not modify the provate one "#bank"


// get and set methods: we're gonna make all of the properties private 
class GetSetPerson{
    #name
    #age
    #alias
    #bank
    constructor(name, age, alias, bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }
    //with this "get" method we can get the name property even when it's private
    get name(){
        return this.#name
    }
    //with this "set" method we can set/update the bank property 
    set bank(newBank){
        this.#bank = newBank
    }

    get bank(){ //we also add the get for bank to see the updated value hehe
        return this.#bank
    }
}

let person5 = new GetSetPerson("Edgar", 26, "ED", "BANK12345")
console.log(person5.name) //we access the property and automatically the get method helps to return it

person5.bank = "new BANK12345" //we update the property and automatically the set method updates the value
console.log(person5.bank) // we can see the updated bank

// inheritence: used to "inherit" properties and behivours (methods) from a class

// animal base class
class Animal{
    constructor(name){
        this.name = name
    }

    //each animal can make a sound
    sound(){
        console.log(`${this.name} is making a generic sound.`)
    }
}

// we want to inherit the previous class to another one, we want its normal behaviour to specialize the class to be inherited

// dog child class
class Dog extends Animal{ // for Dog class, we use "extends Animal" to inherit from Animal, so now the dog class has the "name" attribute
    run(){
        console.log("The dog runs.")
    }
    //well, after make fish class, we go back here to override the sound method hehe
    sound(){
        console.log("Bark!")
    }
}

let myDog = new Dog("Ed_Dog") // we are passing the name as a parameter since now Dog needs it to be initialized

myDog.run()
myDog.sound()

// we can also inherit to another class, but this time we add a constructor for this child class, it'll look like this:
class Fish extends Animal{ // for Dog class, we use "extends Animal" to inherit from Animal, so now the dog class has the "name" attribute
    constructor(name, size){ //exclusive constructor for fish class
        super(name) //super makes a call to its base clase, so it will call the Animal constructor, hence, we send to it the name
        this.size = size
    }
    run(){
        console.log("The fish swims.")
    }
}

// we make the same examples for fish as we did for dog
let myFish = new Fish("Ed_Dog", 10)

myFish.run()
myFish.sound()


// Static methods: we use them to access methods without making an object instantiation
class MathOperations {
    static sum(a, b){
        return a + b
    }
}

//the followin code will throw a TypeError (SO THIS IS NOT ALLOWED)
// let myObj = new MathOperations()
// console.log(myObj.sum(4, 3))

// to get access to the method we need to access it directly without making any instantiation, as follows:
console.log(MathOperations.sum(4,5))

// but WHAT DOES THIS MEAN?!?! Well, means that we can call these type of functions with the class itself, without instantiating  