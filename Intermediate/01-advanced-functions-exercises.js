//1. crea una función que retorne a otra función

function operationType(type){
    switch(type){
        case "addition":
            return (n1, n2) => n1 + n2
        case "subtraction":
            return (n1, n2) => n1 - n2
        case "multiplication":
            return (n1, n2) => n1 * n2
        case "division":
            return (n1, n2) => n1 / n2
        default:
            return -1
    }
}
const operation = operationType("multiplication")
console.log(operation(3, 5))


//2. implementa una función currificada que multiplique 3 números

function curryMultFunc(n1){
    return function(n2){
        return function(n3){
            return n1 * n2 * n3
        }
    }
}

const mult_n1_and_n2 = curryMultFunc(4)(4)
console.log(mult_n1_and_n2(5))

//3. desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente 2^4 = 2 * 2 * 2 * 2 = 16 
function recursiveExponentiation(n, pow){
    if(pow < 0)
        throw new Error("No negative numbers, please :D.")
    if(pow === 0)
        return 1
    if(pow === 1)
        return n
    return n * recursiveExponentiation(n, pow - 1) // 2 * 2 
}

console.log(recursiveExponentiation(2, 4))

//4. crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), 
//   decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter(value){
    let counter = value
    return {
        increment: () => ++counter,
        decrement: () => --counter,
        getValue: () => counter 
    }
}
//First counter
let myFirstCounter = createCounter(5)
console.log(myFirstCounter.getValue())

myFirstCounter.increment()
myFirstCounter.increment()
console.log(myFirstCounter.getValue())

myFirstCounter.decrement()
console.log(myFirstCounter.getValue())

//Second counter
let mySecondCounter = createCounter(10)
console.log(mySecondCounter.getValue())


//5. crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest), 
// y luego multiplique el resultado por multiplier

function sumManyTimes(multiplier, ...numbers){
    let sum = 0
    for(let n of numbers){
        sum += n
    }
    return multiplier * sum
}

const sumManyTimesResult = sumManyTimes(5, 4,4,5,2,5)

console.log(sumManyTimesResult)

//6. crea un callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

function callbackSum(numbers, callback){
    let sumResult = 0
    for(let n of numbers){
        sumResult += n
    }
    callback(sumResult)
}

function message(sumResult){
    console.log(`The sum result is: ${sumResult}`)
}

callbackSum([1,2,3,4,5], message)
callbackSum([1,2,3,4,5], (sumResult) =>{
    console.log(`The sum result with arrow function is: ${sumResult}`)
})

//7. desarrolla una función parcial

function multiplySum(n1){
    const factor = 10
    return function(n2, n3, n4){
        return (n1 * factor) + n2 + n3 + n4
    }
}

const firstMultiply = multiplySum(5) // it contains first-class citizen function which performs the multipication
console.log(firstMultiply(5,4,6)) // then we pass the remaining numbers for the function to sum

//8. implementa un ejemplo que haga uso de spread

const person = ["Edgar", "Vargas", 26, "Student"]

function personInfo(firstName, lastName, age, occupation){
    console.log(`The student '${firstName} ${lastName}' is '${age}' years old and has the '${occupation}' occupation.`)
}

personInfo(...person)

//9. implementa un retorno implícito

const isTeacher = (occupation) => occupation === "Teacher" ? true : false

const firstPerson = isTeacher("Teacher")
if(firstPerson)
    console.log("The person is a teacher.") 
else
    console.log("The person is not a teacher.")

//10. haz uso del this léxico

const personObj = {
    firstName: "Edgar", 
    lastName: "Vargas", 
    age: 26, 
    occupation: "Student",
    infoPerson: function(){
        console.log(`${this.firstName} ${this.lastName} is ${this.age} years old.`)

        setTimeout(() => {
            console.log(`Occupation: ${this.occupation}.`) //lexical this: inherits the "this" from "infoPerson"
        }, 2000)
    }    
}

personObj.infoPerson()
