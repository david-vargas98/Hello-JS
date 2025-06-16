//1. Escribe un comentario en una línea
//This is a single line comment x)

//2. Escribe un comentario en varias líneas
/*
    This is a multi-line comment,
    so this solves the exercise.
*/

//3. Declara variables con valores asociados a todos los datos de tipo primitivos
let strings = "This is the string datatype"
let numbers = 35
let amIAnAdult = false
let anUndefinedDT = undefined
let aNullDT = null
let aSymbolDT = Symbol("My new symbol value")
let aBigInt = BigInt(22222222223456788888888888888888888888888)

//4. Imprime por consola el valor de todas las variables
console.log("\tVariable values:\nstring: " + strings)
console.log("number: " + numbers)
console.log("boolean: " + amIAnAdult)
console.log("undefined: " + anUndefinedDT)
console.log("null: " + aNullDT)
console.log("Symbol: " + aSymbolDT.description)
console.log("BigInt: " + aBigInt)

//5. Imprime por consola el tipo de todas las variables
console.log("\tVariable types:\nstrings DT: " + typeof(strings))
console.log("numbers DT: " + typeof(numbers))
console.log("amIAnAdult DT: " + typeof(amIAnAdult))
console.log("anUndefinedDT: " + typeof(anUndefinedDT))
console.log("null DT: " + typeof(aNullDT))
console.log("Symbol DT: " + typeof(aSymbolDT))
console.log("BigIny DT: " + typeof(aBigInt))

//6. A continuación, modifica los valores de las variables por otros del mismo tipo
strings = "new value"
numbers = 44
amIAnAdult = true
anUndefinedDT = undefined
aNullDT = null
aSymbolDT = Symbol("new symbol jeje")
aBigInt = 3333333333333333333333322222222222222222222222222222222222222229090n

//7. A continución, modifica los valores de las variables por otros de distinto tipo
strings = 34
numbers = "numbers?"
amIAnAdult = "no"
anUndefinedDT = "no undefined"
aNullDT = "not null jeje"
aSymbolDT = 44
aBigInt = 3.3

//8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const stringsTwo = "New constant string"
const numbersTwo = 34
const amIAnAdultTwo = false
const anUndefinedDTTwo = undefined
const aNullDTTwo = null
const aSymbolDTTwo = Symbol("New symbol const")
const aBigIntTwo = 333333333333333333333333333333333345666666666666n

//9. A continuación, modifica los valores de las constantes
//stringsTwo = "New constant string modified"
//numbersTwo = 35
//amIAnAdultTwo = !false
//anUndefinedDTTwo = undefined
//aNullDTTwo = null
//aSymbolDTTwo = Symbol("New symbol const modified")
//aBigIntTwo = 33333333333332222222111111113333333333333345666666666666n

//10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
//All of the lines involving the exercise 9 were commented. 

//coool way to print the info
console.table({
  strings, numbers, amIAnAdult, anUndefinedDT, aNullDT, aSymbolDT: aSymbolDT.description, aBigInt
})
