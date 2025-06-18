// loops: it's associated with a control structure, and will be used to repeat a block of code while a certain condition is true

//for: evaluates a condition each time it's executed, if the condition is met, it continues executing, otherwise, the loop stops its execution
for(let i = 0; i < 5; ++i){
    console.log(`For Iteration ${i + 1} - Hello :D`)
}

//an array or list with numbers that we're going to iterate
const numbers = [1, 2, 3, 4, 5]

for(let i = 0; i < numbers.length; ++i){
    console.log(numbers[i])
}

//while: this loop evaluates the condition before each iteration, it uses an external condition, maybe the only difference against for loop
let i = 0 //external condition

while(i < 5){
    console.log(`While Iteration ${i + 1} - Hello :D`) //same as "for" example
    i++
}

//while(true){} -- an infinite loop xdd a classic

//do while: this loop executes the code at least once and then performs the condition evaluation
do{
    console.log(`Do hile Iteration ${i + 1} - Hello :D`) //same as "for" example
    i++
}while(i < 5)

//for of: this loop helps us to go through something iterable, i.e. a data structure

//the data structures:
myArray = new Array("Edgar", "Alan", "Pepe", "Aldo", true, 34) //array
mySet = new Set(["Edgar", "Alan", "Pepe", "Aldo", true, 34]) //set
myMap = new Map([
    ["mame", "Edgar"],
    ["email", "edgar@mail.com"],
    ["Age", 26]
]) //map

myString = "Hello, Js!"

for(let valor of myArray){
    console.log(valor)
}

for(let valor of mySet){
    console.log(valor)
}

for(let valor of myMap){
    console.log({valor})
}

for(let valor of myString){
    console.log(valor)
}

//good practices

//1. do not make a loop to be infinite, we need to make sure the loop condition will be false at certain point

//we have the "continue" and "break" 

//we use continue to avoid an iteration
for(let i = 0; i < 5; ++i){
    if(i == 1){
        continue //this will skip the second iteration (index 1)
    }else if (i == 3){
        break //imagine that we don't want to go further, so we end the execution at index 3
    }
    console.log(i + 1)
}