//1. usa destructuración para extraer los dos primeros elementos de un array
let myArray = [3,423,2,1]

let [first, second] = myArray

console.log(`${first} and ${second}`)

//2. usa destructuración en un array y asigna un valor predeterminado a una variable
let [, ,third, fourth, fifth = 10] = myArray

console.log(`${third}, ${fourth} and ${fifth}`)

//3. usa destructuración para extraer dos propiedades de un objeto
let myObj = {
    myName: "Edgar",
    myAge: 26,
    monthBirth: "November"
}

let {myName, myAge} = myObj

console.log(myName)
console.log(myAge)

//4. usa destructuración para extraer dos propiedades de un objeto y asignalas a nuevas variables con nombres diferentes
let {myName: newName, myAge: newAge} = myObj

console.log(newName)
console.log(newAge)

//5. usa destructuración para extraer dos propiedades de un objeto anidado
let myObj2 = {
    myName: "Edgar",
    myAge: 26,
    monthBirth: "November",
    skills: {
        physic: 70,
        self_taugh: 90,
        sleep: 77
    }
}

let {skills: {physic, sleep}} = myObj2

console.log(physic)
console.log(sleep)

//6. usa propagación para combinar dos arrays en uno nuevo
let maySales = [20, 32, 22, 44, 55]
let junSales = [44, 23, 50, 12, 21]

let mayJunSales = [...maySales, ...junSales]

console.log(mayJunSales)

//7. usa propagación para crear una copia de un array
let maySalesCopy = [...maySales]

console.log(maySalesCopy)

//8. usa propagación para combinar dos objetos en uno nuevo
let myObjNew = {
    myName: "Edgar",
    myLastName: "Vargas"
}

let myObjNew2 = {
    myBirthYear: 1998,
    myBirthMonth: 11
}

let myObjFull = {...myObjNew, ...myObjNew2}

console.log(myObjFull)

//9. usa propagación para crear una copia de un objeto
let myObjCopy = {...myObjNew}

console.log(myObjCopy)

//10. combina desestructuración y propagación
let personalData = ["edgar", 26, "single"] //array
let workData = ["programmer", 1, ["CSS", "JS", "HTML", "C#"]] //another array

let fullData = [...personalData, ...workData] //array mixing using spreading
console.log(fullData)

let [Name, age, maritalStatus, job, yearsExp, skills] = fullData //creating variables using destructuring

console.log(Name, age, maritalStatus, job, yearsExp, skills)

let myFinalObj = { //creating an object by using array properties
    Name, 
    age, 
    maritalStatus, 
    job, 
    yearsExp, 
    skills
}

console.log(myFinalObj)

//getting object values into new variable names
let{Name: MyName, age: MyAge, maritalStatus: MaritalStatus, job: Job, yearsExp: YearsExp, skills: {0: s1, 1: s2, 2:s3, 3:s4}} = myFinalObj 

console.log(MyName, MyAge, MaritalStatus, Job, YearsExp, s1, s2, s3, s4)