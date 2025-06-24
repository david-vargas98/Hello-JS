//1. crea una función que utilice error correctamente
function divisionByZero(n1, n2){
    if(n2 === 0)
        console.error(`You cannot divide by ${n2}!`)
    else
        console.log(n1 / n2)
}

divisionByZero(1,0)


//2. crea una función que utilice warn correctamente
let pwd = "edgar1e23e4"

function lengthPwd(pwd){
    if(pwd.length < 5)
        console.error("Your password is too short!")
    else if(pwd.length >= 5 && pwd.length <= 10)
        console.warn("Your password is OK, however, it can be better.")
    else if(pwd.length > 10)
        console.log("Your password is acceptable.")
}

lengthPwd(pwd)

//3. crea una función que utilice info correctamente
let person = {
    name: "Edgar",
    age: 26
}

console.info(`Your name is ${person.name} and your are ${person.age} years old.`)

//4. utiliza table
console.table(person)

let myArray = ["Edgar", "Alan", "Pepe", "Aldo"]

console.table(myArray)

//5. utiliza group
console.group("Bands")
console.log("Plini")
console.log("Dream Theater")
console.log("Animals As Leaders")
console.log("Jinjer")
console.log("Haken")
console.groupEnd()

//6. utiliza time
// 0 1 | 1 2 3 5 8 13 21 34
let fibonacci = (n) => {
    if(n === 0 || n === 1)
        return 1
    return fibonacci(n-1) + fibonacci(n-2)
}

let n = 8

console.time("Fibo")
console.log(`The fibonacci number of ${n} is ${fibonacci(n)}.`)
console.timeEnd("Fibo")

//7. valida con assert si un numero es positivo
let positiveN = -1
console.assert(positiveN > 0, "The number must be positive.")


//8. utiliza count

let evenNumbers = [1,2,3,4,5,6,7,8,9,10]

function isEven(evenNumbers){
    for(let n of evenNumbers){
        if(n % 2 == 0)
            console.count("Even")
    }
}

isEven(evenNumbers)

//9. utiliza trace
let num1 = 3, num2 = undefined

function stackMessage(){
    console.trace("Starting StackTrace...")
    throw new Error("One number is not an integer.")
}

function isAnInt(n){
    return Number.isInteger(n)
}

function sum(n1, n2){
    if(isAnInt(n1) && isAnInt(n2))
        return n1 + n2
    stackMessage()
}

function mainF(){
    try{
        let numberSum = sum(num1, num2)
        console.log(numberSum)
    } catch(error){
        console.log(error.message)
    }
}

mainF()

//10. utiliza clear
console.log("Clearing everything...")

setTimeout(() => {
    console.clear()
}, 2000)


