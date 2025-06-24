// 4. importa una función
import { sayHi } from "./31.0-module-export-exercises.js"

sayHi()

// 5. importa una constante
import { maxNum } from "./31.0-module-export-exercises.js"

console.log(maxNum)

// 6. importa una clase
import { Guitar } from "./31.0-module-export-exercises.js"
let myGuitar = new Guitar("Schecter", 7, "Fixed")
console.log(myGuitar)

// 8. importa una función, una constante y una clase por defecto
import defaultImport from "./31.0-module-export-exercises.js"

// console.log(defaultImport(2, 4))

// console.log(defaultImport * 2)

let carObj = new defaultImport("Chevrolet", "Blue")
console.log(carObj)

// 10. importa una función, una constante y una clase desde un directorio diferente al anterior
import { fibonacci, n, Kitchen  } from './modules-exercise/exercise-nine.js'

console.log(fibonacci(n))

let myKitchen = new Kitchen("Maben", "Whirpool", "Bosch")
console.log(myKitchen)