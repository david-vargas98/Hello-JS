//using the follwing array and object:
myArray = ["Edgar", "Alan", "Pepe", "Aldo", true, 34]

let person = {
    Name: "Edgar",
    age: 26,
    alias: "N/A"
}

myVariable = myArray[1] //we are accesing to the indexed-1 propety
console.log(myVariable)

myObj = person.Name //we are accesing to the "Name" property as well 
console.log(myObj)

// the above IS NOT destructuring, but simply assigning variables


//destructuring: it allows us to extract values,whether they are arrays or objects, and assign them concisely to variables

//IT'S PLURAL, it means that with a single definition we will be able to create some variables and assign them to some values

// array sintaxis //

let [myVal00, myVal01, myVal02, myVal03, myVal04, myVal05, myVal06] = myArray //we've destructured the array values in order 

console.log(myVal00) // we can validate the above by showing the values of the variables
console.log(myVal01)
console.log(myVal02)
console.log(myVal03)
console.log(myVal04)
console.log(myVal05)
console.log(myVal06) //undefined

// array sintaxis with default values //
let [myVal07 = 0, myVal08 = 0, myVal09 = 0, myVal10 = 0, myVal11 = 0, myVal12 = 0, myVal13 = 0] = myArray //we've added a new value with a default value

console.log(myVal07) // we can validate the above by showing the values of the variables
console.log(myVal08)
console.log(myVal09)
console.log(myVal10)
console.log(myVal11)
console.log(myVal12)
console.log(myVal13) //not undefined, since we gave it a default value


//Ignoring variables //
let [myVal14, , , myVal17] = myArray //we avoid 15 and 16 cause we are not interested in them, so we avoid them using [, , ,]

console.log(myVal14)
console.log(myVal17)


// objects sintaxis //
let {Name, age, alias} = person //we use the "{}" sintax, instead of using "[]", since it'a an object

console.log(Name)
console.log(age)
console.log(alias)

// objects sintaxis with default values (NOT POSSIBLE) //
let {Name2, age2, alias2, email = "ed@ed.com"} = person //we use the "{}" sintax, instead of using "[]", since it'a an object

console.log(Name2) //these variables do not exist!!!!
console.log(age2)
console.log(alias2)
console.log(email) //this exists because we've defined its default value

//we can't use new names since the variable names must be the same as the object property, that's why it did not work
//also, that's why we are allowed not to follow the "order" as we did with arrays and still get the right properties

// objects sintaxis with default values and new variable names (POSSIBLE) //
let {Name: NameNew, age: ageNew, alias: aliasNew} = person //we assgin new names using : notation

console.log(NameNew)
console.log(ageNew)
console.log(aliasNew)


// destructuring nested objects
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
//we access to job property, since is an object we use {} again and then we access the jobName property
let {Name: newName, job: {jobName: jName}} = personThree

console.log(newName)
console.log(jName)


// SPREADING: we have an operator that is used for spreading --> (...) it allows to spreading, whether the array or the object elements,
// to other arrays or objects

// ARRAY SYNTAX: spreding myArray into the myArray2
let myArray2 = [...myArray] //this makes a REAL COPY, instead of using "let myArray2 = myArray" which only is a memory reference
console.log(myArray2)

let myArray3 = [...myArray, 4, 5] 
console.log(myArray3)

// array mixing

let mixedArray = [...myArray2, ...myArray3]
console.log(mixedArray)


// OBJECT SYNTAX:

let person4 = {...person, email: "edgar@edgar.com"} // an object copy, a real copy + more properties we add
console.log(person4)

let person5 = {...person}
console.log(person5)