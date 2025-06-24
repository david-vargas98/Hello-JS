// 1. exporta una función
export function sayHi(){
    console.log("Hi!")
}

// 2. exporta una constante
export const maxNum = 10

// 3. exporta una clase
export class Guitar{
    constructor(model, strings, bridge){
        this.model = model
        this.strings = strings
        this.bridge = bridge
    }
}

// 7. exporta una función, una constante y una clase por defecto

// export default function multiplication(n1, n2){
//     return n1 * n2
// }

// const PI = 3.1416
// export default PI

export default class Car{
    constructor(model, color){
        this.model = model
        this.color = color
    }
}