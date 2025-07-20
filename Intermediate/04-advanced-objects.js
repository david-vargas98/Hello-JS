// advanced objects

//-------------------------------------------------------- prototypes and inheritance

// prototypes: a mechanism used by objects to inherit properties and functions from other objects
// any object created by us in JavaScript has an associated proptotype

// the properties and method are defined within the object literal, everything between {} is added directly to the object, not to the protoype
let person = {
    myName: "Edgar",
    age: 26,
    greet(){
        console.log(`Hello, I'm ${this.myName}`)
    }
}

// every object in Js has a hidden property called "[[Prototype]]" and shows the object's prototype, and that can be accessed in two ways:
console.log(person.__proto__) // one way: __proto__ (deprecated)
console.log(Object.getPrototypeOf(person)) // another way Object.getPrototypeOf() (modern way, mostly used)

person.sayAge = function(){ // this is also added directly to the "person" object, not to the prototype 
    console.log(`Hello, I'm ${this.age} years old.`)
}

console.log(person)
person.sayAge()

console.log(person.hasOwnProperty("myName")) // true, (direct property)
console.log(person.hasOwnProperty("toString")) // false, (it comes from the prototype)



// Inheritance using prototypes: the ability to inherit information from other objects; it is used base on prototypes!

// in this example, we want the programmer to inherit from person, so we can take advantage of its existing properties and methods
let programmer = Object.create(person) // we use Object.create() to create an object from an instance (programmer inherits from person)

console.log(person.language) // this returns undefined, since this property hasn't been created yet
programmer.language = "JavaScript" // we create the property for programmer, not for person

console.log(programmer.myName)
console.log(programmer.language) // here, the property is succesfully printed
programmer.greet()
programmer.sayAge()

// summary, adding or modifying properties from an object that inherits a prototype object won't change the base properties


//-------------------------------------------------------- static and instance methods

function Person(name, age){
    this.name = name
    this.age = age
}

Person.prototype.greet = function (){
    console.log(`Hola, soy ${this.name}`)
}

let new_person = new Person("Edgar", 26)
new_person.greet()


//-------------------------------------------------------- advanced methods

//asign: is used to copy the properties of one or more source objects to a target object

let person_core = { name: "Edgar" }
let person_details = { age: 26, alias: "deivid" }

// what does it mean? Imagine that we want to merge the objetcs above
let full_person = Object.assign(person_core, person_details) // the target object goes first, source object goes after
console.log(full_person)

// keys, values, entries: methods that allow us to get keys, values and key-values from an object
console.log(Object.keys(full_person))
console.log(Object.values(full_person))
console.log(Object.entries(full_person))