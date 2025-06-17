//1. crea una variable para cada operación aritmética
let a = 10, b = 15

let addition = a + b
let subtraction = a - b
let multiplication = a * b
let division = a / b
let exponent = a ** b
let modulo = a % b
let increment = a+1
let decrement = a-1

//2. crea una variable para cada tipo de operación de asignación, que haga uso 
// de las variables utilizadas para las operaciones aritméticas
let additionAssignment = a
additionAssignment+=b

let subtractionAssigment = a
subtractionAssigment-=b

let multiplicationAssigment = a
multiplicationAssigment*=b

let divisionAssigment = a
divisionAssigment/=b

let exponentAssigment = a
exponentAssigment**=b

let moduloAssigment = a
moduloAssigment%=b

let incrementAssigment = a
incrementAssigment++

let decrementAssigment = a
decrementAssigment--

//3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(a < b)
console.log(b >= a)
console.log(a === 10)
console.log(b === 15)
console.log(a !== b)

//4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a > b)
console.log(b < a)
console.log(b == a)
console.log(a === b)
console.log(a + b > 100)


//5. utiliza el operador lógico AND
let studentIsGraduated = true
let studentHasJob = true
console.log(studentHasJob && studentIsGraduated)

//6. utiliza el operador lógico OR
let momIsAtMyJob = false
let iAmAtMyJob = true
console.log(momIsAtMyJob && iAmAtMyJob)

//7. combina ambos operadores lógicos
let gokuIsMan = true, veguetaIsMan = true, milkIsWoman = true, gotenIsWoman = false
console.log((gokuIsMan && veguetaIsMan && milkIsWoman) || gotenIsWoman)

//8. añade alguna negación
console.log(gokuIsMan && veguetaIsMan && !gotenIsWoman && milkIsWoman)

//9. utiliza el operador ternario
let age = 15
let isEighteen = age >= 18 ? "You can come in, boy" : "You need to step out, little boy"
console.log(isEighteen)

//10. combina operadores aritméticos, de comparación y lógicos
let myName = "edgar"
let currentAge = 17
let birthday = true
currentAge = birthday ? currentAge+=1 : currentAge

let finalMessage = birthday && currentAge >= 18 ? `${myName} is ${currentAge} years older, so he is a big boy.` :
                                              `${myName} is a little boy or today is not his birthday cx.`

console.log(finalMessage)
