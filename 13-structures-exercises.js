//1. crea un array que almacene cinco animales
let animalArray = ["Dog", "Cat", "Lion", "Elephant", "Bird"]
console.log(animalArray)

//2. añade dos más. Uno al principio y otro al final
animalArray.unshift("Tiger") //at the beginning
animalArray.push("Bear") //at the end
console.log(animalArray)

//3. elimina el que se encuentra en la tercera posición
animalArray.splice(2, 1) //the third position (index 2) is the start, and 1 the quantity of elements to remove
console.log(animalArray)

//4. crea un set que almacene cinco libros
let mySet = new Set(["Harry potter", "The art of loving", "Liquid love", "Gaia", "Sophia's world"])
console.log(mySet)

//5. añade dos más, uno de ellos repetido
mySet.add("Lord of the rings") //it adds the new book
console.log(mySet)
mySet.add("Lord of the rings") //the book is duplicated, it won't add the book
console.log(mySet)

//6. elimina uno concreto a tu elección
if(mySet.delete("Gaia")){
    console.log("The book was removed.")
}else{
    console.log("The book does not exists or it was already removed.")
}
console.log(mySet)

//7. crea un mapa que asocie el número del mes a su nombre
let myMap = new Map([
    [1, "January"],
    [2, "February"],
    [3, "March"],
    [4, "April"],
    [5, "May"],
    [6, "June"],
    [7, "July"],
    [8, "August"],
    [9, "September"],
    [10, "October"],
    [11, "November"],
    [12, "December"]
])
console.log(myMap)

//8. comprueba si el mes número 5 existe en el mapa e imprime su valor
if(myMap.has(5)){
    console.log(myMap.get(5))
}else{
    console.log("The month does not exists.")
}

//9. añade al mapa una clave con un array que almacene los meses de verano
myMap.set("SummerMonths", ["June", "July", "August"])
console.log(myMap)
console.log(myMap.get("SummerMonths"))

//10. crea un array, transfórmalo a un set y almacénalo en un Map
let myNewArray = [0, 2, 4, 6, 8, 10] //array creation
console.log(myNewArray)

let arrayToSet = new Set(myNewArray) //transforming to set
console.log(arrayToSet)

let myFinalMap = new Map() //empty set
console.log(myFinalMap)

myFinalMap.set("numbers", arrayToSet) //storing the set into the map using a key
console.log(myFinalMap)

console.log(myFinalMap.get("numbers")) //fetching the complete set