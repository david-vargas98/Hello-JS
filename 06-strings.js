// strings

// string concatenation
let myName = "Edgar"
let greeting = "Hello, " + myName + "!"
console.log(greeting)
console.log(typeof(greeting))

// string length
console.log(greeting.length)

// string characters access
console.log(greeting[0])
console.log(greeting[12])

// common methods
console.log(greeting.toUpperCase())
console.log(greeting.toLocaleLowerCase())
console.log(greeting.indexOf("Edgar"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Hello"))
console.log(greeting.slice(0, 8))
console.log(greeting.replace("Edgar", "David"))

//Template literals
let message = `This is 
my JavaScript course`

console.log(message) // a multi line message

let email = "edgar@mail.com"

console.log(`Hello, ${myName}!, your email is ${email}`) // variable interpolation (thnk god)