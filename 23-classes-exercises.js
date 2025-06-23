//1. crea una clase que reciba dos propiedades
class Guitar{
    constructor(brand, strings){
        this.brand = brand
        this.strings = strings
    }
}
let guitar1 = new Guitar("Schecter", 6)
console.log(guitar1)

//2. añade un método a la clase que utilice las propiedades
class GuitarTwo{
    constructor(brand, strings){
        this.brand = brand
        this.strings = strings
    }

    info(){
        console.log(`This is a/an ${this.brand} guitar with ${this.strings} strings.`)
    }
}

let guitarTwo1 = new GuitarTwo("Ibanez", 7)
guitarTwo1.info()

//3. muestra los valores de las propiedades e invoca a la función

console.log(guitarTwo1.brand)
console.log(guitarTwo1.strings)
guitarTwo1.info()


//4. añade un método estático a la primera clase 
class GuitarThree{
    constructor(brand, strings){
        this.brand = brand
        this.strings = strings
    }
    static doesItDjent(nStrings){
        if(nStrings < 7)
            console.log("This guitar does not Djent :/")
        else
            console.log("This guitar does Djent uwu")
    }
}

//5. haz uso del método estático
GuitarThree.doesItDjent(7)

//6. crea una clase que haga uso de herencia 
class BaritoneGuitar extends GuitarThree{
    constructor(brand, strings, scale, bridge){
        super(brand, strings)
        this.scale = scale
        this.bridge = bridge
    }
}

let baritoneGuitar1 = new BaritoneGuitar("Schecter", 6, 27, "Bishop")
console.log(baritoneGuitar1)

//7. crea una clase que haga uso de getters y setters
class Bass{
    #brand
    #model
    #strings
    constructor(brand, model, strings){
        this.#brand = brand
        this.#model = model
        this.#strings = strings
    }
    set brand(newBrand){
        this.#brand = newBrand
    }
    get brand(){
        return this.#brand
    }
    set model(newModel){
        this.#model = newModel
    }
    get model(){
        return this.#model
    }
    set strings(newStrings){
        this.#strings = newStrings
    }
    get strings(){
        return this.#strings
    }
    play(){
        console.log(`The ${this.#brand} ${this.#model} bass has ${this.#strings} strings, and is being played.`)
    }
}

//8. modifica la clase con getters y setters para que use propiedades privadas

// this exercise was made along with the seventh one, we instantiate the object:
let myBass = new Bass("PRS", "Classic", 6)
console.log(myBass) //if we try to get the object by using console.log we get an empty object, so we use the setters and getters instead:


//9. utiliza los get y set y muestra sus valores
console.log(myBass.brand) //we can access to the property since we have created the get method to allow this using private properties 
console.log(myBass.model) //the same with the rest
console.log(myBass.strings)
myBass.play()

//10. sobrescribe un método de una clase que utilice herencia
class BaritoneBass extends Bass{
    #scale
    #signature
    constructor(brand, model, strings, scale, signature){
        super(brand, model, strings)
        this.#scale = scale
        this.#signature = signature
    }
    set scale(scale){
        this.#scale = scale
    }
    get scale(){
        return this.#scale
    }
    set signature(signature){
        this.#signature = signature
    }
    get signature(){
        return this.#signature
    }
    play(){
        console.log(`The ${this.brand} ${this.model} bass has ${this.strings} strings, a ${this.scale}" scale, signed by ${this.signature}, and is being played.`)
    }
}

let bariBass = new BaritoneBass("Schecter", "Banshee", 5, 28, "Synyster")
bariBass.play()