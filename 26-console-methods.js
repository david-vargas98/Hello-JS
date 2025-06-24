// console

//log: used for displaying messages on the screen, the method we've been using along this course
console.log("Almost done, Js!")

// error: used for handling error messages

console.error("This is an error message!")

//we can also pass the type of error using new Error or something
console.error("Error: cannot connect to database.", new Error("failed connection")) 

// warn: used for displaying warning messages
console.warn("This is a warning message")


//info: used for displaying an extra info message, more information

console.info("This is a more detailed message.")

// does console work only for displaying messages? No, we can give format to our messages:

// table: it will display the data in a table format

let data = [  //array of arrays
    ["Edgar", 26],
    ["David", 24]
]

console.table(data) //we can display the above

data = [  //array of objects
    {name: "Edgar", age: 26},
    {name: "David", age: 24}
]

console.table(data)

// group: it's like a header, and wee need to end it using gruopend()
console.group("User")
console.log("Name: Edgar")
console.log("Age: 26")
console.log("Something else")
console.groupEnd()

// time: measures the time it takes to execute a block of code
console.time("Time execution") //we need to give a name to this measure
for(let i = 0; i < 100000000; ++i){

}

console.timeEnd("Time execution") //this ends the time measurement, we also have to pass the same name that is used in 'console.time()'

// assert: it shows an error message if the thing which is evaluating is false, it's like a if statement

let age = 15

console.assert(age >= 18, "The user must be of legal age.")

// count: it counts the number of times a specific label has been called

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click") // it resets the counter
console.count("Click")


// trace: it shows the stack execution, "stacktrace"
function funcA(){
    funcB()
}
function funcB(){
    console.trace("Starting stack trace...")
}

funcA()

// clear: cleans everything

// console.clear()