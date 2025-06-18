//NOTA: explora diferentes sintaxis de bucles para resolver los ejercicios

//1. crea un bucle que imprima los números del 1 al 20
const maxNumber = 20
//using for
console.log("Using for")
for(let i = 1; i <= maxNumber; ++i){
    console.log(i)
}
//using while
let it = 0
console.log("Using while")
while(it < maxNumber){
    console.log(it + 1)
    it++
}
//using do while
let itTwo = 0
console.log("Using do-while")
do{
    console.log(itTwo + 1)
    itTwo++
}while(itTwo < maxNumber)

//2. crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let cien = 100
let sum = 0
console.log("\nUsing for")
for(let i = 1; i <= cien; ++i){
    sum+=i
}
console.log(sum)

console.log("Using while")
let itSum = 1
sum = 0
while(itSum <= cien){
    sum+=itSum
    itSum++
}
console.log(sum)

console.log("Using do-while")
let itDoWhile = 1
sum = 0
do{
    sum+=itDoWhile
    itDoWhile++
}while(itDoWhile <= cien)
console.log(sum)

//3. crea un bucle que imprima todos los números pares entre 1 y 50
const maxEven = 50
console.log("\nUsing for")
for(let i = 1; i <= maxEven; ++i){
    if(i % 2 == 0){ //we use modulo operation the make sure it's an even number
        console.log(i)
    }
}

console.log("Using while")
let iterator = 1
while(iterator <= maxEven){
    if(iterator % 2 == 0){
        console.log(iterator)
    }
    iterator++
}

console.log("Using do-while")
let iteratorDoWhile = 1
do{
    if(iteratorDoWhile % 2 == 0){
        console.log(iteratorDoWhile)
    }
    iteratorDoWhile++
}while(iteratorDoWhile <= maxEven)

//4. dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
const myArray = ["edgar", "pepe", "aldo", "gera", "sebas", "karla", "andrea"]
console.log("\nUsing for")
for(let i = 0; i < myArray.length; ++i){
    console.log(myArray[i])
}

console.log("Using while")
let nameIt = 0
while(nameIt < myArray.length){
    console.log(myArray[nameIt])
    nameIt++
}

console.log("Using do-while")
let nameDoWhileIt = 0
do{
    console.log(myArray[nameDoWhileIt])
    nameDoWhileIt++
}while(nameDoWhileIt < myArray.length)

console.log("Using for of")
for(let name of myArray){
    console.log(name)
}

//5. escribe un bucle que cuente el número de vocales en una cadena de texto
const vowels = ['a', 'e', 'i', 'o', 'u']
let text = "We need to count the vowels for today!"
let numberOfVowels = 0

console.log("\nUsing for")
for(let i = 0; i < text.length; ++i){
    if(vowels.includes(text[i].toLowerCase())){
        numberOfVowels++
    }
}
console.log(numberOfVowels)

console.log("Using while")
let textTwo = "We need to count the vowels for today, agaaaaaaain!"
let itVowels = 0
numberOfVowels = 0

while(itVowels < textTwo.length){
    if(vowels.includes(textTwo[itVowels].toLowerCase())){
        numberOfVowels++
    }
    itVowels++
}
console.log(numberOfVowels)

console.log("Using do-while")
let textThree = "We need to count the vowels for today, again and again, please let me get some rest!"
numberOfVowels = 0
let doWhileVowelsIt = 0

do{
    if(vowels.includes(textThree[doWhileVowelsIt].toLowerCase())){
        numberOfVowels++
    }
    doWhileVowelsIt++
}while(doWhileVowelsIt < textThree.length)
console.log(numberOfVowels)

console.log("Using for of")
let textFour = "Great, this is the final loop for this exercise :D!"
numberOfVowels = 0

for(let char of textFour){
    if(vowels.includes(char.toLowerCase())){
        numberOfVowels++
    }
}
console.log(numberOfVowels)

//6. dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
const numbersArray = [1,2,3,4,5]
let multiplication = 1 //it's a 1 cause we can not multiple by 0 xdd that comes to a zero result

console.log("\nUsing for")
for(let i = 0; i < numbersArray.length; ++i){
    multiplication*=numbersArray[i]
}
console.log(multiplication)

console.log("Using while")
let itNumbers = 0
multiplication = 1

while(itNumbers < numbersArray.length){
    multiplication*=numbersArray[itNumbers]
    itNumbers++
}
console.log(multiplication)

console.log("Using do-while")
numbersArray.push(2) //we add one more number hehe
let numbersDoWhileIt = 0
multiplication = 1

do{
    multiplication*=numbersArray[numbersDoWhileIt]
    numbersDoWhileIt++
}while(numbersDoWhileIt < numbersArray.length)
console.log(multiplication)

console.log("Using for of")
numbersArray.push(2) //we add one more number hehe x2
multiplication = 1

for(let number of numbersArray){
    multiplication*=number
}
console.log(multiplication)

//7. escribe un bucle que imprima la tabla de multiplicar del 5
const multiplicationTableNumber = 5
const max = 10
console.log("\nUsing for")
for(let i = 1; i <= max; ++i){
    console.log(`${multiplicationTableNumber} x ${i} = ${multiplicationTableNumber * i}`)
}

console.log("Using while")
let multiplicationTableIt = 1
while(multiplicationTableIt <= max){
    console.log(`${multiplicationTableNumber} x ${multiplicationTableIt} = ${multiplicationTableNumber * multiplicationTableIt}`)
    multiplicationTableIt++
}

console.log("Using do-while")
let multDoWhileIt = 1
do{
    console.log(`${multiplicationTableNumber} x ${multDoWhileIt} = ${multiplicationTableNumber * multDoWhileIt}`)
    multDoWhileIt++
}while(multDoWhileIt <= max)

console.log("Using for of")
let numbersMult = [1,2,3,4,5,6,7,8,9,10]
for(let number of numbersMult){
    console.log(`${multiplicationTableNumber} x ${number} = ${multiplicationTableNumber * number}`)
}

//8. usa un bucle para invertir una cadena de texto
console.log("\nUsing for")
let normalText = "This is a reversed text D:", textReversed = ""
for(let i = normalText.length - 1; i >= 0; --i){
    textReversed+=normalText[i]
}
console.log(`\nOriginal: ${normalText}`)
console.log(`Reversed: ${textReversed}`)


//9. usa un bucle para generar los primeros 10 números de la secuencia de fibonacci
//0 1 1 2 3 5 8 13 21 34
console.log("\nUsing for")
const maxFibo = 10, caseBaseOne = 0, caseBaseTwo = 1
let prev = 0, current = 0, next = 0
for(let i = 0; i < max; ++i){
    if(i == caseBaseOne){
        console.log(caseBaseOne)
        prev = caseBaseOne
    } else if (i == caseBaseTwo){
        console.log(caseBaseTwo)
        current = caseBaseTwo
    } else{
        next = prev + current
        console.log(next)

        prev = current
        current = next
    }
}

//10. dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
console.log("\nUsing for")
const newNumberArray = [1,2,3,4,5,23,12,55,32,8,11,90]
let majorNumbers = []
let majorNumber = 10

for(let i = 0; i < newNumberArray.length; ++i){
    if(newNumberArray[i] > majorNumber){
        majorNumbers.push(newNumberArray[i])
    }
}
console.log(majorNumbers)

console.log("\nUsing while")
let itMajors = 0
majorNumbers = []

while(itMajors < newNumberArray.length){
    if(newNumberArray[itMajors] > majorNumber){
        majorNumbers.push(newNumberArray[itMajors])
    }
    itMajors++
}
console.log(majorNumbers)

console.log("\nUsing do-while")
let itMajorDoWhile = 0
majorNumbers = []

do{
    if(newNumberArray[itMajorDoWhile] > majorNumber){
        majorNumbers.push(newNumberArray[itMajorDoWhile])
    }
    itMajorDoWhile++
}while(itMajorDoWhile < newNumberArray.length)
console.log(majorNumbers)

console.log("\nUsing for of")
majorNumbers = []

for(let number of newNumberArray){
    if(number > majorNumber){
        majorNumbers.push(number)
    }
}
console.log(majorNumbers)
