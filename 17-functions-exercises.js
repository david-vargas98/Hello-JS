//NOTA: explora diferentes sintaxis de funciones para resolver los ejercicios

//1. crea una función que reciba dos números y devuelva su suma
function sum(n1, n2){
    return n1 + n2
}

console.log(sum(4, 5))

//2. crea una función que reciba un array de números y devuelva el mayor de ellos
let numbersArray = [2,4,1,6,5,9,10,3,23,0]

function max(array){
    let max = array[0]

    for(let i = 1; i < array.length; ++i){
        if(array[i] > max){
            max = array[i]
        }
    }
    return max
}

console.log(max(numbersArray))

//3. crea una función que reciba un string y devuelva el número de vocales que contiene
let myString = "Text with some vowels muajaja"
let vowels = ['a', 'e', 'i', 'o', 'u']

function countVowels(string, vowels){
    let totalVowels = 0
    for(let letter of string){
        if(vowels.includes(letter.toLowerCase()))
            totalVowels++
    }
    return totalVowels
}

console.log(countVowels(myString, vowels))

//4. crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let myStringArray = ["edgar", "david", "carlos", "enrique", "valeria", "ismael"]

function toUpperStringArray(array){
    let myStringArrayToUpper = []
    for(let string of array)
        myStringArrayToUpper.push(string.toUpperCase())
    return myStringArrayToUpper
}

console.log(toUpperStringArray(myStringArray))

//5. crea una funcion que reciba un número y devuelva true si es primo, y false en caso contrario
const number = 9
const isPrimeNumber = function(number){
    if(number <= 1) //base case
        return false

    if(number === 2) //second base case
        return true

    for(let i = 2; i <= Math.sqrt(number); ++i){
        if(number % i === 0)
            return false
    }
    return true
}

console.log(isPrimeNumber(number))

//6. crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let arrayOne = [1,2,3,4,5,6,7,8,9,10]
let arrayTwo = [11,4,13,5,22,7,34,13]

let coincidences = (array1, array2) => {
    let mergedArray = []
    for(let element of array1){ //O(n)
        if(array2.includes(element)) //O(n) = O(n) x O(n) = O(n*n)
            mergedArray.push(element)
    }
    return mergedArray
}

console.log(coincidences(arrayOne, arrayTwo))

let coincidencesWithSet = (array1, array2) => { //optimzed way but using a set 
    let mergedArray = []
    let mySet_Array = new Set(array2) //O(n)

    for(let element of array1){ //O(n)
        if(mySet_Array.has(element)) //O(1) = O(n) x O(1) = O(n)
            mergedArray.push(element)
    }
    return mergedArray
}

console.log(coincidences(arrayOne, arrayTwo))

//7. crea una función que reciba un array de números y devuelva la suma de todos los números pares
let evenNumbersArr = [0,1,2,3,4,5,6,7,8,9,10,12,14,16,22,44,24]

let evenNumbersSum = (array) =>{
    let totalSum = 0
    for(let number of array){
        if(number % 2 == 0)
            totalSum+=number
    }
    return totalSum
}

console.log(evenNumbersSum(evenNumbersArr))


//8. crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
let numberArr = [0,1,2,3,4,5,6,7,8,9,10]

let newArray = (numberArr) => {
    let newArray = []
    for(let number of numberArr){
        newArray.push(number * number)
    }
    return newArray
}

console.log(newArray(numberArr))

//9. crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let myText = "This is a normal string"

let reversed = (string) => {
    let finalString = ""
    let temp = string.split(" ")

    for(let i = temp.length - 1; i >= 0; --i){
        finalString+=temp[i] + " "
    }
    return finalString
}

console.log(reversed(myText))

//10. crea una función que calcule el factorial de un número dado
let factNumb = 0

let actualFactNumb = (n) => {
    let temp = 1
    for(let i = n; i > 1; --i){
        temp *= i
    }

    return temp
}

console.log(actualFactNumb(factNumb))