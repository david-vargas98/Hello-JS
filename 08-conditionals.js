//if, else if, else

//if: if a condition is true, a block of code will be executed
let age = 34

if(age == 37){
    console.log(`The age is ${age}`)
}

//else

if(age == 37){
    console.log(`The age is ${age}`)
}else {
    console.log(`The age is not 37`)
}

//else if
if(age == 37){
    console.log(`The age is ${age}`)
} else if(age < 18){
    console.log("Is a minor")
} else {
    console.log(`The age is not 37 and is not a minor`)
}

//ternary operator (a compact way to write a if else statement)

const message = age == 37 ? "The age is 37" : "The age is not 37"
console.log(message)

//switch (an alternative to a bunch of else if)
let day = 12, dayName

switch(day){
    case 0:
        dayName = "Monday"
        break
    case 1:
        dayName = "Tuesday"
        break
    case 2:
        dayName = "Wednesday"
        break
    case 3:
        dayName = "Thursday"
        break
    case 4:
        dayName = "Friday"
        break
    case 5:
        dayName = "Saturday"
        break
    case 6:
        dayName = "Sunday"
        break
    default:
        dayName = "Incorrect number day"
}

console.log(dayName)