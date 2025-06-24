// module export: it's a way of dividing our code in chunks that we can use, it allows us to organize the code in several files

//what is a module? Simply, it is a file

//we use 'export' to export the function containing this statement

export function add(a, b){
    return a + b
}

console.log(add(5, 10))

// properties
export const PI = 3.1416
export let name = "Edgar"

// classes
export class Circle{
    constructor(radius){
        this.radius = radius
    }
    area(){
        return Math.PI * Math.pow(this.radius, 2)
    }
    perimeter(){
        return Math.PI * 2 * this.radius
    }
}

// default export: 

export default function substract(a, b){ //We comment this to export the class example
    return a - b
}

// we can also export classes by default
// export default class MyClass{
//     func(){
//         console.log("Hi")
//     }
// }


// THIS IS WRONG, there can be only one export by default
// export default function sub(a, b){
//     return a - b
// }

// THIS IS ALSO WRONG, we can only export functions, classes, declarations, not properties
// export default EMAIL = "edgar@edgar.com"
export const EMAIL = "edgar@edgar.com" //instead we need to make the direct exportation

