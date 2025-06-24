// module import: we use the 'import' keyword  + functionName between {} + 'from' keyword + fileName between doble quotes

import {add, PI, name, Circle} from "./28-export-modules.js"

//import substract from "./28-export-modules.js"
import defaultImport from "./28-export-modules.js" // we can use another name, however, it will work as well

add(5, 2)

// this will throw an ERROR:

//1. Since we're using node, to work using modules we need to change the file extensions to .msj for the involved files
//2. we can add a 'package.json' file and add the following block:
//  {"type": "module"}

// we can import constants as well, we only need to add to the {} after import, e.g: {add, PI}

console.log(PI)

// we can also export variables {add, PI, name}
console.log(name)

// we can use the circle class:
let circle = new Circle(10)

console.log(circle.radius)
console.log(circle.area().toFixed(2))
console.log(circle.perimeter().toFixed(2))


// default export: we can use the real name or not for this export
// console.log(substract(4, -2))
console.log(defaultImport(4, -2))

//HENCE, the default is only used when we only have one property to export, since there can be only one export by default, no duplicates allowed


// using export default class
// let MyClass = new defaultImport()
// MyClass.func()

// you see? What's exported by default has nothing to do with its  actual name xdd since we can import it using the name we want



//modular project: this is done when we have different files spread throughout the project
//example:
// import {MyClass} from "./ClassesDirectory/file.js"


// external modules: modules that I've downloaded, they're not mine

//const os = require("os") //we cannot use it here, it's a module file, then we create a .cjs file -> CommonJS script