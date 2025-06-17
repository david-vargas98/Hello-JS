// 1. imrpime por consola tu nombre si una variable toma su valor
const MyName = "Edgar"
const variable = "david"

if(variable.toLowerCase() == MyName.toLowerCase()){
    console.log(MyName)
}else{
    console.log("No es tu nombre")
}

// 2. imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos
const user = "david", password = "123"
if(user == "david" && password == "123"){
    console.log(`Welcome ${user}!`)
}else{
    console.log("Incorrect username or password")
}

// 3. verifica si un número es positivo, negativo o cero e imprime un mensaje
const number = -1
let verificationMessage

if(number > 0){
    verificationMessage = `The number '${number}' is positive.`
} else if(number < 0){
    verificationMessage = `The number '${number}' is negative.`
}else{
    verificationMessage = `The number '${number}' is zero.`
}
console.log(verificationMessage)

// 4. verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años les faltan
const age = 18
let voteMessage
if(age > 17 && age <= 100){
    voteMessage ="You can vote now!"
}else if (age >= 0 && age < 18){
    voteMessage =`Sorry, you can't vote :/, there are still ${ 18 - age} years left hehe`
}else{
    voteMessage ="Please, enter a valid age >:C"
}
console.log(voteMessage)

// 5. usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
const ageAgain = (age > 0 && age < 18) ? "Minor" : "Adult"
console.log(ageAgain)

// 6. muestra en qué estación del año nos encontramos dependiendo del valor de una variable "mes"
let month = "November"
let season
if(month == "March" || month == "April" || month == "May"){
    season = "The season is Spring."
}else if(month == "June" || month == "July" || month == "August"){
    season = "The season is Summer."
}else if(month == "September" || month == "October" || month == "November"){
    season = "The season is Autumn."
}else if(month == "December" || month == "January" || month == "February"){
    season = "The season is Winter."
}else{
    season = "Non valid month."
}
console.log(season)

// 7. muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let days
if(month == "January" || month == "March" || month == "May" || month == "July" || month == "August" || month == "October" || month == "December" ){
    days = `The month ${month} has 31 days.`
}else if(month == "April" || month == "June" || month == "September" || month == "November"){
    days = `The month ${month} has 30 days.`
} else if(month == "February"){
   days = `The month ${month} has 29 days.`
} else{
    days = "Non valid month."
}
console.log(days)

// 8. usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let language = 1
let message
switch(language){
    case 0:
        message = "Hola, buenos días!"
        break
    case 1:
        message = "Hello, good morning"
        break
    case 2:
        message = "Bonjour, bonjour!"
        break;
    case 3:
        message = "Salve, bonum mane!"
        break
    case 5:
        message = "你好早上好!"
        break;
    default:
        message = "That's not a valid language >:C"
}
console.log(message)

// 9. usa un switch para hacer de nuevo el ejercicio 6
let monthSwitch = "February"
let seasonSwitch

switch(monthSwitch){
    case "March":
    case "April":
    case "May":
        seasonSwitch = "Spring"
        break
    case "June":
    case "July":
    case "August":
        seasonSwitch = "Summer"
        break
    case "September":
    case "October":
    case "November":
        seasonSwitch = "Autumn"
        break
    case "December":
    case "January":
    case "February":
        seasonSwitch = "Winter"
        break
    default:
        seasonSwitch = "Not a valid month"
}
console.log(seasonSwitch)

// 10. usa un switch para hacer de nuevo el ejercicio 7
let monthSwitchTwo = "February"
let daysSwitch

switch(monthSwitchTwo){
    case "January":
    case "March": 
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        daysSwitch = `The month ${monthSwitchTwo} has 31 days.`
        break
    case "April": 
    case "June": 
    case "September": 
    case "November":
        daysSwitch = `The month ${monthSwitchTwo} has 30 days.`
        break
    case "February":
        daysSwitch = `The month ${monthSwitchTwo} has 29 days.`
        break
    default:
        daysSwitch = "Non valid month."
}
console.log(daysSwitch)