// Advanced functions

// first-class citizens: entities which we can be treated as any other value in the language
// 1- they could be assigned to a variable
// 2- being passed as an rgument to a function
// 3- being returned from a function
// 4- being stored into a data structure
// 5- having properties

const greet = function(myName) { // function without a name assigned to a constant
    console.log(`Hola ${myName}`)
}

greet("Edgar") // we call the no-named function as a normal function and it works

// this is a function which receives another function as well as its parameter
function processGreeting(greetFunction, name){
    greetFunction(name) // we call the function using its parameter
}

processGreeting(greet, "David")

// a function which returns a function
function returnGreeting(name){
    return greet
}

const greet2 = returnGreeting() // we assign the result to a constant variable

greet2("Edgar David") // we use the now constant and we pass to it the value to print

//------------------------------------------------------------------------------------

// advanced arrow functions

// implicit return: when the function's body is a simple expression so that, there's no need to draw an explicit return
const multiply = (a, b) => a * b //you see? there's no 'return' word in it
console.log(multiply(2, 5))

// 'this' scope: the arrow functions has no own context, so, it uses the 'this' from the scope where it was created
const handler = {
    myName: "Edgar",
    greeting: function(){ // it takes the object's conext to acces its properties such as 'myName'
        console.log(`Hola ${this.myName}`)
    },
    //arrowGreeting: () => console.log(`Hola ${this.myName}`) //this will throw an exception since the arrow func can't access the property
};


//handler.greeting()
//handler.arrowGreeting()

//----------------------------------------------------------------------

// IIFE (Immediately Invoked Function Expression):
// - they don't need to be named, it's nonsense, as they will be executed immediately
 
// classic IIFE: for this type of function is necessary to add a ';' to the previous instruction, otherwise it won't be executed
(function(){
      console.log("Classic IIFE")
})(); //we need to add ';' as another IIFE expression comes after it

// arrow function IIFE
(() => {
    console.log("Arrow function IIFE")
})();

//----------------------------------------------------------------------

// rest parameters (...): automatically generates an array along with the parameters, cause we don't know how many parameters are coming 

function sum(...numbers){
    console.log(numbers)
}

sum([3,3,2,5,4]) // it outputs [[3,3,2,5,4]]
sum(3,3,2,5,4) // it outputs [3,3,2,5,4]


function sum2(...numbers){ // as we can see, the use of "...numbers" avoids to passing parameters one by one 
    let result = 0
    for(let number of numbers){
        result += number
    }
    return result
}

console.log(sum2(3,4,5,6,7)) // it outputs [[3,3,2,5,4]]
console.log(sum2(3,3,2,5,4)) // it outputs [3,3,2,5,4]

//----------------------------------------------------------------------

// spread operator (...): similar to rest, it is written in the same way, but we use it on a different place
// is used to "expand" array elements, objects etc

const numbers = [1, 2, 3]

function sumWithSpread(a, b, c){
    return a + b + c
}

console.log(sumWithSpread(1, 2, 3)) // without spread

// we are passing a single parameter, however the function is exprecting to receive 3 of them, that will output "undefined"
console.log(sumWithSpread(...numbers)) // but if we use spread it wil "spreads" the values, it's the oposite of rest 

// because we receive the array -> [1, 2, 3] and the operator (...) decomposes the array into the arguments -> (1, 2, 3)
// it's like "unpacking" the values xD, if the array has more values than the actual number of parameters nothing happens, since it takes
// the (in this case) three first arguments, but if the array has less values than the actual number of parameters it throws NaN

//----------------------------------------------------------------------

// Closures: it happens when the inner function of a function is going to access to the variables from the external function

function createCounter(){
    let counter = 0
    return function (){ // internal function acces to the scope of the external function
        counter++
        console.log(`Counter: ${counter}`)
    }
}

const counter = createCounter()
counter()
counter()

//----------------------------------------------------------------------

// recursivity: it's a function which calls itself

// the code below could lead to an infinite recursivity 
// function myFunction(){
//     myFunction()
// }

// myFunction()

function factorial(n){
    if(n <= 1)
        return 1
    return n * factorial(n-1)
}

console.log(factorial(0))

//----------------------------------------------------------------------

//Partial functions: is the idea of dividing a function with several parameters into smaller functions that receive some of the parameters
// and returns a new function which will expect the next parameters

function originalSum(a, b, c){ // take this example, we receive 3 parameters and we return the sum of them, nothing special
    return a + b + c
}

function partialSum(a){ // here we receive a single parameter
    return function (b, c){ // then, we return a function which receives the 2 remaining parameters 
        return sum2(a, b, c) // finally. we call sum and we pass an array containing the 3 parameters
    }
}

const sumWith = partialSum(4) // a first-class citizen function which receives the first parameter
console.log(sumWith(2, 3)) // now we can pass the remaining parameters
console.log(sumWith(9, 4)) // imagine that now we want to add other numbers to 4, you see? we're making partial sums using partial functions

// so this is it, we have a static value. like "4" which is not gonna change at all and then we want to dinamically add other numbers

//----------------------------------------------------------------------

// Currying: to transform a function which receives some parameters, some arguments into a function which will receive one at a time, i.e.
// basically, it is to transform a multi-parameter function into a sequence of one-parameter functions

function currySum(a){
    return function(b){
        return function(c){
            return function(d){
                return sum2(a, b, c, d)
            }
        }
    }
}

const sumAB = currySum(2)(3)
const sumC = sumAB(4)
console.log(sumC(4))
console.log(sumAB(4)(5))

//----------------------------------------------------------------------

// callbacks: pass one function to another as an argument to customize its behavior

function processData(data, callback){
    const result = sum2(...data)
    callback(result)
}

function processResult(result){
    console.log(result)
}

function processResult2(result){
    console.log(`My result is: ${result}`)
}

processData([1,2,3], processResult)
processData([1,2,3], processResult2)
processData([1,2,3], (result) => {
    console.log(`My result using the arrow function is: ${result}`)
}) // using an arrow function