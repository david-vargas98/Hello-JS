//1. captura una execpción utilizando try-catch
let array = [1,2,3,4,5,6,7,8,9,10]

function divideByEachNumber(array, number){
    dividedNumberArray = array.map(n => number / n)
    console.log(dividedNumberArray)
}

try{
    divideByEachNumber(array, r)
} catch {
    console.log("Error: You made a mistake.")
}

//2. captura una excepción utilizando try-catch y finally
class Car {
    #model
    #color
    constructor(model, color){
        this.#model = model
        this.#color = color
    }
    set model(model){
        this.#model = model
    }
    get model(){
        return this.#model
    }
}

try{
    let myCar = new Car("Chevrolet","red")
    if(myCar.model === undefined)
        throw new Error("You have no access to the model property.")
    if(myCar.color === undefined)
        throw new Error("You have no access to the color property.")
    console.log(myCar.model)
} catch (error){
    console.log(`Error: ${error.message}`)
} finally{
    console.log("Thank you for your request, have a nice one!\n")
}

//3. lanza una excepción genérica
let n1 = 10, n2 = 0

function division(n1, n2){
    if(n2 === 0)
        throw new Error("Zero division")
    return n1 / n2
}

try{
    division(n1, n2)
}catch(error){
    console.log(`${error.message}: You can't divide by zero!`)
}

//4. crea una excepción personalizada
class Login extends Error{
    constructor(message, user, pin){
        super(message)
        this.user = user
        this.pin = pin
    }
    myAttempt(){
        console.log(`You tried to acces the app by using the following pin: ${this.pin}`)
    }
}

//5. lanza una excepción personalizada
function login(username, pin){
    if(!Number.isInteger(pin))
        throw new Login("Please, enter a numeric valid pin.", username, pin)
    if(username === "edgar" && pin === 1234)
        console.log(`Welcome, ${username}`)
    else
        console.log("You've entered whether a wrong username or password.")    
}

let username = "edgar", pin = 1234

try{
    login(username, pin)
}catch (error){
    console.log(`Pin error: ${error.message}`)
    error.myAttempt()
}
console.log()

//6. lanza varias excepciones según la lógica definida
class nonNegativeAtStartExc extends Error {
    constructor(message, pwd){
        super(message)
        this.pwd = pwd
    }
    warning(){
        return `You can't use the '${this.pwd[0]}' symbol as first character for your password.`
    }
}

class tooShortPwd extends Error {
    constructor(message, pwd){
        super(message)
        this.pwd = pwd
    }
    warning(){
        return `Your password has ${this.pwd.length} characters, it needs to be at least 13 characters long!`
    }
}

class specialCharactersPwd extends Error {
    constructor(message, pwd){
        super(message)
        this.pwd = pwd
    }
    warning(){
        return "The password must contains at least one special character!"
    }
}

let passwd = "Edgar12345678!"
const specialCharSet = new Set(['!', '|', '_', '*', '$', '%', '&'])

function isValidPasswd(pwd){
    if(pwd[0] === '-'){
        throw new nonNegativeAtStartExc("Negative symbol:", pwd)
    }

    if(pwd.length < 13){
        throw new tooShortPwd("Short password:", pwd)
    }

    for(let char of specialCharSet)
        if(pwd.includes(char))
            return true
    
    throw new specialCharactersPwd("Special characters:", pwd)
    }

try{
    let validPwd = isValidPasswd(passwd)
    if(validPwd)
        console.log("This is a valid password! :D")
    else
        console.log("This is an invalid password! :D")
        
} catch(error){
    console.log(error.message, error.warning())
}


//7. captura varias excepciones según la lógica definida
let anotherPwd = "Edgar12345678"

try{
    let validPwd = isValidPasswd(anotherPwd)
    if(validPwd)
        console.log("This is a valid password! :D")
    else
        console.log("This is an invalid password! :D")
        
} catch(error){
    if(error instanceof nonNegativeAtStartExc)
        console.log("Please, don't start your password using a '-' symbol.")
    else if(error instanceof tooShortPwd)
        console.log("Please, make your password longer than 12 characters.")
    else if(error instanceof specialCharactersPwd)
        console.log("Please, include at least one special character in your password.")     
    else if (error instanceof Error)
        console.log("Something happened and I don't have any idea of what it was.")   
}

console.log()

//8. crea un bucle que intente tranformar a float cada valor y capture y muestre los errores
class notANumber extends Error{
    constructor(message, value){
        super(message)
        this.value = value
    }
    warning(){
        return `The '${this.value}' value cannot be converted to a float number because it isn't a number.`
    }
}

class infinityNumber extends Error{
    constructor(message, value){
        super(message)
        this.value = value
    }
    warning(){
        return `The '${this.value}' value cannot be converted to a float number because it's an infinity number.`
    }
}

class notSafeInteger extends Error{
    constructor(message, value){
        super(message)
        this.value = value
    }
    warning(){
        return `The '${this.value}' value cannot be converted to a float number because it isn't a safe integer number.`
    }
}

let values = ["2", Infinity]

function conversionToFloat(values){
    for(let value of values){
        let converted = Number(value)
        if(Number.isNaN(converted))
            throw new notANumber("Not a number", value)
        if(!Number.isFinite(converted))
            throw new infinityNumber("Infinity number", value)
        if(!Number.isSafeInteger(converted))
            throw new notSafeInteger("Not safe integer", value)
    }
}

try{
    conversionToFloat(values)
} catch(error){
    if(error instanceof notANumber)
        console.log(`${error.message}: ${error.warning()}`)
    else if(error instanceof infinityNumber)
        console.log(`${error.message}: ${error.warning()}`)
    else if (error instanceof notSafeInteger)
        console.log(`${error.message}: ${error.warning()}`)
}

//9. crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personal
class Person{
    constructor(firstName, lastName, middleName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
        this.age = age
    }
}

function hasMiddleName(middleName) {
    if(middleName === undefined)
        throw Error("The middlename property is not defined.")
    return true
}

let myObj = new Person("Edgar", "Vargas", undefined, 26)

try{
    hasMiddleName(myObj.middleName)
} catch(error){
    console.log(`Not defined: ${error.message}`)
}

console.log()
//10. crea una función que realice reintentos en caso de error hasta un máximo de 10
function magicRandomNumber(){
    let randomNumber = Math.random() //random number between 0 and 1
    if(randomNumber < 0.3) // here we are giving just a 30% of chances to hit the number
        return "Correct magic number!"
    else
        throw new Error("Bad luck")
}

const maxAttempts = 10

let attempts = 0

while(attempts < maxAttempts){
    try{
        console.log(magicRandomNumber())
        break
    } catch(error){
        console.log(`${error.message}: You didn't get a magic correct number :(`)
        attempts++
    }
}
console.log(`Failed attempts: ${attempts}`)