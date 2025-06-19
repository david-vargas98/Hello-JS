//functions: a block of code designed to execute a specific task

//sintax: we use the function word + functionName (written in camelcase) + () + {}
function myFunction(){
    console.log("Hello, function!")
}

//we call the function to execute it
myFunction()

//we can call it as much as we want
myFunction()
myFunction()
myFunction()

//or even better, if u need to call it a certain number of times, you can put it into a loop
let n = 5
for(let i = 0; i < n; ++i){
    console.log("Calling function from loop")
    myFunction()
}

//we can also pass some parameters
function myFuncParam(myName){
    console.log(`\nHello, ${myName}!`)
}

myFuncParam("Edgar") //We pass the parameter, if we don't pass any parameter it will print an undefined

//anonymous functions: functions that do not have a defined name; take in account that we need to assing this functions to a variable
//otherwise, we won't be able to invoke the function
const anonymousFunction = function (anotherName){
    console.log(`\nHello, ${anotherName} from an anonymous function!`)
}

anonymousFunction("David") // invoking the function

//we use these type of functions when we need a small functionality, or maybe we need a function in a certain scope of code


//arrow functions: it's a more concise way of writing functions, a way that was introduced with EMASCRIPT 6
//as with anonymous functions, we must also assign the arrow function to a variable
const myArrowFunc = (myNameAgain) => {
    console.log(`\nHello, ${myNameAgain} from an arrow function!`)
} 

myArrowFunc("McDinero") // an as we saw it with anonymous functions, we invoke arrow functions like this

// we can even simplify more our function in a single line
const myArrowFuncSimplified = (nameName) => console.log(`\nHello, ${nameName} from a simplified arrow function!`)

myArrowFuncSimplified("Davalos")


//Parameters: the set more than one parameter we need to concatenate them using commas
function sum(a, b){
    console.log(a + b)
}

sum(5, 3) //we call the function by passing the two pertinent parameters
sum(4) // if we avoid the second parameter will return a NaN (Not A Number) since it tries to add the number and nothing xd
sum() //the same thing happens when we avoid passing both parameters

//so, for that kind of situations we can set default values
function defaultSum(a = 0, b = 0){
    console.log(a + b)
}

defaultSum() //a zero will be printed on the screen, yei! :D
defaultSum(4) //4 + 0
defaultSum(3, 4) //normal sum
defaultSum(b = 3) //a = 0 + b = 3 = 3

//return of values: instead of printing on screen or something like that, we want to return the single value
function multiplication(a, b){ //we create a function which returns the "value" of a multiplication, it won't print on the screen
    return a * b //we use return to achieve that thing
}

console.log(multiplication(3, 4)) //we can print the value by using log method

let valueReturned = multiplication(5, 5) //or even better, we assign the value to a variable
console.log(valueReturned) //and then we print it on the screen

//nested functions: basically a function within a function

function externalFunc(){
    console.log("External function :O")
    function internalFunc(){
        console.log("Internal function :o")
    }
    internalFunc() //to call the 'internalFunc', we achieve this by calling the function within the function where it's declared
}

externalFunc() //this function can be called
//internalFunc() //but it can't be called, since it's inside the 'externalFunc' scope, so, internalFunc is out of scope

//there exists ways to call the function out of the scope, however, since this is a basic course, we don't want to overcomplicate things


//Higher-order functions: they are functions that receive other functions as arguments xDxdDddxD
function applyFunc (func){
    
}

applyFunc(myArrowFuncSimplified("Higher-order function")) //this is a a way to do it, but

//we can also do something like:
function applyFuncTwo (func, parameter){
    func(parameter)
}

applyFuncTwo(myArrowFuncSimplified, "Higher-order function") //we pass the pure function and as a paramter the function string parameter


// foereach: a 'forerach' is a function used to execute loops that are associated to iterable elements
//so, it's a method that Js Arrays have
const numbers = [1, 2, 3, 4, 5]

numbers.forEach(function (value) { //the long way
    console.log(value)
})

numbers.forEach((value) => console.log(value)) //simplified way

//using set
mySet = new Set(["Edgar", "Alan", "Pepe", "Aldo", true, 34]) //this ok :D

mySet.forEach((element) => console.log(element))

//using map
myMap = new Map([
    ["mame", "Edgar"],
    ["email", "edgar@mail.com"],
    ["Age", 26]
])

myMap.forEach((Value, key) => console.log(key, Value)) //the value goes first and then the key, due to Js native implementation of Array

