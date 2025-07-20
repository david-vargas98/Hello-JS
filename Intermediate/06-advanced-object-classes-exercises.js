//1. agrega una función al prototipo de un objeto
function Car(model){ //construction function
    this.model = model
}

Car.prototype.turnOn = function(model){ //adding function to prototype
    console.log(`The ${this.model} has been turned on!`)
}

const myCar1 = new Car("Corolla")
myCar1.turnOn()  //JS looks up for the "turnOn" within the "myCar1" object (it's not there), then goes to the prototype -> "Car.Prototype" 
                // and finds the function, finally, executes the function with "this" pointing to myCar1

//2. crear un objeto que herede de otro
const mustang = Object.create(new Car("Mustang"))
mustang.turnOn() // this function was inherited from Car class
console.log(mustang.model)

mustang.whoOwner = (owner) => console.log(`The owner is ${owner}`) // this function is unique for mustang object
mustang.whoOwner("Edgar")

//3. define un método de instancia en un objeto
function Cat (name, sound, id){
    this.name = name
    this.sound = sound
}
Cat.prototype.makeSound = function(){
        console.log(`${this.name} is making the ${this.sound} sound.`)
}

const mycat = Object.create(new Cat("Catty", "Meow"))
mycat.makeSound() // here we are using and instance method

//4. haz uso de get y set en un objeto
function Person(age, gender){
    let personName
    let personAge
    let personGender
    
    this.setName = function(name){
        personName = name
    }
    this.getName = function(){
        console.log(`My name is ${personName}`)
    }

    this.setAge = function(age){
        personAge = age
    }
    this.getAge = function(){
        console.log(`${personName}'s age is ${personAge}`)
    }

    this.setGender = function(gender){
        personGender = gender
    }
    this.getGender = function(){
        console.log(`${personName}'s gender is ${personGender}`)
    }
}

const person1 = new Person()
person1.setName("Edgar")
person1.getName()

person1.setAge(26)
person1.getAge()

person1.setGender("Male")
person1.getGender()

//5. utiliza la operación assign en un objeto
let cellphone_basic = { name: "Xiaomi", family: "Poco" }
let cellphone_advance_details = { processor: "Snapdragon", ram: 8, storage: 250, storage_ram_Units: "GB" }

let cellphone_full = Object.assign(cellphone_basic, cellphone_advance_details)
console.log(cellphone_full)
console.log(`The cellphone is a ${cellphone_full.name} from the ${cellphone_full.family} family.\nIt has a ${cellphone_full.processor} processor, and also ${cellphone_full.ram} and ${cellphone_full.storage} ${cellphone_full.storage_ram_Units} of RAM and Storage respectively. `)

//6. Crea una clase abstracta
class Instrument{
    constructor(name, brand, model, string){
        if(new.target === Instrument)
            throw new Error("The class must be implemented by a child object.")
        this.name = name
        this.brand = brand
        this.model = model
        this.string = string
    }

    makeNoise(){
        throw new Error("The sound is particular to each instrument, you can't make a \"Generic\" sound.")
    }

    connectToAmp(){
        throw new Error("The amplifier is specific to each instrument.")
    }
}

//7. utiliza polimorfismo en dos clases diferentes
class Guitar extends Instrument{
    makeNoise(){
        console.log(`The ${this.string} string ${this.model} ${this.name} from ${this.brand} sounds super fast!`)
    }
}

class Bass extends Instrument{
    makeNoise(){
        console.log(`The ${this.string} string ${this.model} ${this.name} from ${this.brand} is making a dense noise!`)
    }
}

const guitar = new Guitar("Baritone guitar", "Chapman", "B-7", "7")
guitar.makeNoise()

const bass = new Bass("Baritone bass", "Schecter", "A-5", "5")
bass.makeNoise()


//8. implementa un mixin
const myDishWahserMixin = {
    dry(){
        console.log(`Hey ${this.owner}!,\nDrying the dishes...`)
    },
    moistHeat(){
        console.log(`Hey ${this.owner}!,\nWashing the dishes by using moist heat...`)
    }
}

class DishWasher{
    constructor(owner){
        this.owner = owner
    }
}

Object.assign(DishWasher.prototype, myDishWahserMixin)

const myDishWasher = new DishWasher("Edgar")
myDishWasher.dry()
myDishWasher.moistHeat()

//9. crea un singleton
class DBConnection{
    constructor(stringConn){
        if(DBConnection.instance)
            return DBConnection.instance

        this.stringConn = stringConn
        DBConnection.instance = this
    }
}

const myConn = new DBConnection("db: myDB; port: 1234; type: trusted")
console.log(myConn.stringConn)

const myConn2 = new DBConnection()
console.log(myConn.stringConn)

//10. desarrolla un proxy
class UniversityID{
    constructor(name, age, startDate, university, credits){
        this.name = name
        this.age = age
        this.startDate = startDate
        this.university = university
        this.credits = credits
    }
}

const proxyUniversityIDHandler = {
    propertyAccessMessage(target, property){
        return `\nThe ${property} property was accessed\n${property}: ${target[property]}`
    },
    propertyChangeMessage(target, property, value){
        console.log(`\nThe ${property} property will be changed...\nPrevious ${property}: ${target[property]}`)
        target[property] = value
        console.log(`\nThe ${property} property was successfully changed\nNew ${property}: ${target[property]}`)
    },
    get(target, property){
        const allowedProperties = ["name", "age", "startDate", "university", "credits"];
        if(allowedProperties.includes(property)){
            return this.propertyAccessMessage(target, property)
        }
        // ------- using switch is pretty much clear, but suing a properties array reduces code, we keep commented code for reference
        // switch(property){
        //     case "name":
        //         return this.propertyAccessMessage(target, property)
        //     case "age":
        //         return this.propertyAccessMessage(target, property)
        //     case "startDate":
        //         return this.propertyAccessMessage(target, property)
        //     case "university":
        //         return this.propertyAccessMessage(target, property)
        //     case "credits":
        //         return this.propertyAccessMessage(target, property)
        // }
    },
    set(target, property, value){
        const allowedProperties = ["name", "age", "startDate", "university", "credits"];
        if(allowedProperties.includes(property)){
            if(property === "age" && Number(value) < 18)
                throw new Error("The student must be major!")
            this.propertyChangeMessage(target, property, value)
            return true
        }
        return false

        // ------- same: using switch is pretty much clear, but suing a properties array reduces code, we keep commented code for reference
        // switch(property){
        //     case "name":
        //         this.propertyChangeMessage(target, property, value)
        //         break
        //     case "age":
        //         const numericValue = Number(value)
        //         console.log(typeof(numericValue))
        //         if(numericValue < 18)
        //             throw new Error("The student must be major!")
        //         this.propertyChangeMessage(target, property, value)
        //         break
        //     case "startDate":
        //         this.propertyChangeMessage(target, property, value)
        //         break
        //     case "university":
        //         this.propertyChangeMessage(target, property, value)
        //         break
        //     case "credits":
        //         this.propertyChangeMessage(target, property, value)
        //         break
        // }
        // return true
    }
}

const student1 = new Proxy(new UniversityID("Edgar David Vargas Fuentes", 26, "01-16-2021", "UDG", 50), proxyUniversityIDHandler)

console.log(student1.name, student1.age, student1.startDate, student1.university, student1.credits)

student1.name = "Edgar Vargas"
student1.age = 27
