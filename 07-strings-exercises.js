// 1. concatena dos cadenas de texto
let firstString = "I'm a string XD", secondString = "and I'm a string too, lol"

console.log(firstString + " " + secondString)

// 2. muestra la longitud de una cadena de texto
console.log("The length of the first string is: " + firstString.length)

// 3. muestra el primer y último carácter de un string
console.log("The first character is '" + firstString[0] + "', and the last one is: '" + firstString[firstString.length-1] + "'")

// 4. convierte a mayúsculas y minúsculas un string
console.log("First string converted to upper: " + firstString.toUpperCase() + " and to lower: " + firstString.toLowerCase())

// 5. crea una cadena de texto en varias líneas
let multi_lineString = `First line
second line
third line, lol`
console.log(multi_lineString)

// 6. interpola el valor de una variable en un string
let finalString = `First: ${firstString}, Second: ${secondString}`
console.log(finalString)

// 7. reemplaza todos los espacios en blanco de un string por guiones
let spacedString = "Hello my friend I'm a string hehe"
console.log(spacedString.split(" ").join("-")) //it divides the string into an array using the space and then join them using "-"

//or we can also use a regex
console.log(spacedString.replace(/\s/g, "-"))

// 8. comprueba si una cadena de texto contiene una palabra concreta
let word = "This is my 'secret' final word"
console.log(word.includes("secret"))

// 9. comprueba si dos strings son iguales
let stringOne = "One", stringTwo = "Two"
console.log(`'${stringOne}' y '${stringTwo}' Son iguales?: ${stringOne === stringTwo}`)

// 10. comprueba si dos strings tienen la misma longitud
console.log(`'${stringOne}' y '${stringTwo}' tienen la misma longitud?: ${stringOne.length === stringTwo.length}`)