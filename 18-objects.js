//objects

//sintax: we define an object between braces, it's similar to a map, since we use kind of keys and values, however, it is more complex
let person = {
    Name: "Edgar",
    age: 26,
    alias: "N/A"
}

// access to properties: 

// we use the point notation
console.log(person.Name) // we take the "person" object, access its property by using its name

//we also use the bracket notation
console.log(person["Name"]) //we take the "person" object, then we use [], and inside of them we get the properties by using their name


//MODIFY an object PROPERTY
person.Name = "David" //we just need to use the equal to operator and then we assign the new value  
console.log(person.Name)

//changing data type: we can even change the datatype
console.log(typeof(person.age)) //before changing the data type

person.age = "27" //now the number is converted to a string
console.log(person.age) //and it still works

console.log(typeof(person.age)) //after changing the data type


//DELETE an object PROPERTY
delete person.age //this deletes the "age" property
console.log(person)
console.log(person.age) //if we try to access the property, an undefined value will be displayed

//ADD an object PROPERTY
person.Email = "edgar@edgar.com" //we add the email property
console.log(person) //we print the object to valide the above

person["ageAdded"] = 26
console.log(person) //we print the object to valide the above


// methods (functions) within the objects

let personTwo = {
    Name: "Edgar",
    age: 26,
    alias: "N/A",
    walk: function(){
        console.log(`${this.Name} is walking.`) //now the object has a function "walk"
    }
}
personTwo.walk()

// object nested
let personThree = {
    Name: "Edgar",
    age: 26,
    alias: "N/A",
    walk: function(){
        console.log(`${this.Name} is walking.`) //now the object has a function "walk"
    },
    job: {
        jobName: "Programmer",
        exp: 1,
        work: function(name){
        console.log(`${name} is working as a ${this.jobName}.`) //now the object has a function "walk"
        }
    }
}
personThree.job.work(personThree.Name) //we pass the reference to the Name property from the "main" object

// equality of objects

let personOneCopy = {
    Name: "Edgar",
    age: 26,
    alias: "N/A"
}

console.log(personOneCopy)

let personFour = {
    Name: "Edgar",
    age: 26,
    alias: "N/A"
}

console.log(personFour) //is the same as personOneCopy

//so, by this logic if we compare both objects they should be the same, righ?

console.log(personOneCopy == personFour) //however, they're not the same

//here, we introduce the VARIABLES BY REFERENCE and VARIABLES BY VALUE
//since we are comparing two objects, each of them has a unique memory address, so we are comparing memory addresses xdd

// if we want to compare the object values, we need to do it for each property as follows:
console.log(personOneCopy.Name === personFour.Name) //this displays a true value


// iteration: we need to use the "in" clause to access the "keys" of the objects and we use the object[] sintax to get the property

for(let key in personFour){
    console.log(`${key}: ${personFour[key]}`)
}

// functions as objects

function Person(name, age){ //this function works as an object "constructor"
    this.name = name
    this.age = age
}

let personConsOne = new Person("Edgar", 26) //we instantiate an object using the constructor function

console.log(personConsOne) //printing the object
console.log(typeof personConsOne) //validating if it is an object

//the above works, however, it's not a good practice since it is mandatory for a constructor to be inside a class