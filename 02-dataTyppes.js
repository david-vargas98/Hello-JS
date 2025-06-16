//primitive datatypes

//Strings
let myName = "Edgar Vargas"
let alias = "we"
let email = "myemail@email.com"

//numbers
let age = 26 //int
let height = 1.77 //decimal

//booleans
let isStudent = true
let isTeacher = false

//Undefined
let UndefinedValue
console.log(UndefinedValue)

//null
let nullValue = null

//symbol: unique values which could be used as property identifiers, to avoid collisions
let mySymbol = Symbol("mySymbol")

//BigInt: it's used for extremely large numbers
let myBigInt = BigInt(232222222222222222222222222222222222222222222222222222222221) //1st way
let myBigIntTwo = 232222222222222222222222222222222222222222222222222222222221n //2nd way


//showing dataypes

console.log("Tipo de myName: " + typeof(myName))
console.log("Tipo de alias: " + typeof(alias))
console.log("Tipo de email: " + typeof(email))

console.log("Tipo de age: " + typeof(age))
console.log("Tipo de height: " + typeof(height))

console.log("Tipo de isStudent: " + typeof(isStudent))
console.log("Tipo de isTeacher: " + typeof(isTeacher))

console.log("Tipo de UndefinedValue: " + typeof(UndefinedValue))

console.log("Tipo de nullValue: " + typeof(nullValue))

console.log("Tipo de mySymbol: " + typeof(mySymbol))

console.log("Tipo de myBigInt: " + typeof(myBigInt))
console.log("Tipo de myBigIntTwo: " + typeof(myBigIntTwo))





