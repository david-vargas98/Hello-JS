// 9. exporta una función, una constante y una clase desde una carpeta
export function fibonacci(n){
    if(n === 0 || n === 1)
        return 1
    return fibonacci(n-1) + fibonacci(n-2)
}

export const n = 8

export class Kitchen{
    constructor(stove, microwave, oven){
        this.stove = stove
        this.microwave = microwave
        this.oven = oven
    }
}