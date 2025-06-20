//1. crea un objeto con 3 propiedades
let guitarObj = {
    brand: "Schecter",
    bridge: "O-Matic",
    strings: 7
}
console.log(guitarObj)

//2. accede y mueestra su valor
console.log(`Guitar Brand: ${guitarObj.brand} | Guitar Bridge: ${guitarObj.bridge} | Strings: ${guitarObj.strings}`)

//3. agrega una nueva propiedad
guitarObj.Pickups = "Hambucker"
console.log(guitarObj)

//4. elimina una de las 3 primeras propiedades
delete guitarObj.bridge
console.log(guitarObj)


//5. agrega una función e invocala
guitarObj.TurnOn = function(){
    console.log(`The ${this.brand} guitar has been turned on.`)
}
guitarObj.TurnOn()

//6. itera las propiedades del objeto
for(let key in guitarObj){
    console.log(`Property: ${key} - Value: ${guitarObj[key]}`) //including functions
}

for(let key in guitarObj){
    if(typeof guitarObj[key] !== "function")
        console.log(`Property: ${key} - Value: ${guitarObj[key]}`) //excluding functions
}

//7. crea un objeto anidado
let guitarObjTwo = {
    brand: "Schecter",
    bridge: "O-Matic",
    strings: 6,
    distEffects: {
        volume: 77,
        deepth: 82,
        presence: 90
    } 
}

console.log(guitarObjTwo)

//8. accede y muestra el valor de las propiedades anidadas
for(let subProp in guitarObjTwo.distEffects){
    console.log(guitarObjTwo.distEffects[subProp])
}

//9. comprueba si los dos objetos creados son iguales

console.log(guitarObj == guitarObjTwo)
console.log(guitarObj === guitarObjTwo) //both are false, we are comparing memory addresses xdd

//10. comprueba si dos propiedades diferentes son iguales
console.log(guitarObj.brand == guitarObjTwo.brand) //this is one which are true for both objs

console.log(guitarObj.strings == guitarObjTwo.strings) //false since the left one has 7 strings and the right one has 6 strings
console.log(guitarObj.distEffects == guitarObjTwo.distEffects) //false, since the is no 'distEffects' property for guitarObj