//exceptions: these are unexpected events, i.e. something unexpected has happened to our program while running
//stop the normal flow of the application, luckily, if it happens we have a way to handle it :D

// The following produces an error: TypeError: Cannot read properties of undefined (reading 'email')
let myObj
// console.log(myObj.email)
//we have some ways to handle this kind of errors

// handling/capturing errors:

// try-catch:

try{
    // 'try' statement tries to execute the code within of it 
    console.log(myObj.email)
    console.log("Execution is done without errors.") //if an error happens this won't be executed
} catch{
    // if any error happened, the following code will be executed:
    console.log("Execution is done with errors.")
}

// error capture: we uses catch() to capture the error, this way we can know what error is involved
try{
    console.log(myObj.email)
    console.log("Execution is done without errors.") //if an error happens this won't be executed
} catch (error){ //we can access to the error
    console.log("Execution is done with error:", error.message)
}

// finally: will be executed whether an error occurs or not
try{
    console.log(myObj)
    console.log("Execution is done without errors.") //if an error happens this won't be executed
} catch (error){
    console.log("Execution is done with error:", error.message)
} finally{
    console.log("This will be executed always :D.")
}

console.log()
// throwing errors

// throw: it allow us to throw errors 

function sumIntegers(a, b){
    if(typeof a !== "number" || typeof b !== "number")
        throw new TypeError("These properties cannot be added together.")
    if(!Number.isInteger(a) || !Number.isInteger(b))
        throw new Error("The properties must be integer numbers.") // this error will be catched on try segment
    if(a == 0 || b == 0) // if any of the numbers is equal to zero we throw the custom exception
        throw new SumZeroIntegerError("An attempt was made to add zeros", a, b)
    return a + b
}

try{
    console.log(sumIntegers(4, 3))
    console.log(sumIntegers(4.4, 3))
} catch (error) {
    console.log("Execution is done with error:", error.message)
}

// various type errors

try{
    console.log(sumIntegers("4", 3))
    //console.log(sumIntegers(4.4, 3))
} catch (error) {
    if(error instanceof TypeError) //we catch the TypeError exception
        console.log("Execution is done with a type error:", error.message)
    else if(error instanceof Error) //we catch the Error exception
        console.log("Execution is done with error:", error.message)
}


// create custom exceptions
class SumZeroIntegerError extends Error{ //class for custom exception extends from Error class
    constructor(message, a, b){
        super(message) //base class constructor
        this.a = a
        this.b = b
    }
    printNumbers(){
        console.log(`${this.a} + ${this.b}`)
    }
}

try{
    console.log(sumIntegers(0, 3))
} catch (error) {
    console.log("Execution is done with error:", error.message)
    error.printNumbers()
}