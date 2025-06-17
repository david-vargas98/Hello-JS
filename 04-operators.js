//operators: useful for making calculations between two or more numbers

//arithmetic operators
console.log("\tarithmetic operators\n")
console.log(5 + 10) //addition

//or even better
let a = 5, b = 10;

console.log(a + b) //addition
console.log(a - b) //subtraction
console.log(a * b) //multiplication
console.log(a / b) //division
console.log(a % b) //modulo
console.log(a ** b) //exponent

console.log(++a) //increment
console.log(--a) //decrement


//assignment operators
console.log("\tassignment operators\n")

let myVariable = 2 //equal sign
console.log(myVariable)

myVariable +=2 //addition assignment
console.log(myVariable)

myVariable -=2 //subtraction assignment
console.log(myVariable)

myVariable *=2 //multiplication assignment
console.log(myVariable)

myVariable /=2 //division assignment
console.log(myVariable)

myVariable **=2 //exponential assignment
console.log(myVariable)

myVariable %=2 //remainder assignment
console.log(myVariable)

//comparison operators
console.log("\tcomparison operators\n")
a = 4, b = 3

console.log(a > b) //greater than
console.log(a < b) //lesser than
console.log(a >= b) //greater than or equals to
console.log(a <= b) //lesser than or equals to
console.log(a != b) //inequality

//special case: when we use '=', we're comparing the values
console.log("\tEqual operator\n")
console.log(a == 4) //4 == 4 -> true
console.log(a == "4") //4 == "4" -> 4 == 4 -> true
//the above will throw true for both , JS is smart enough to know that those are the same, besides they're different DT, so:
console.log(a === 4) //this makes a type and value comparison, so if the apply this logic to:
console.log(a === "4") //4 === "4" -> false, so it performs the actual type comparison, hence, it throws false

//special case: when we use '!=', we're comparing the values
console.log("\tInequality operator\n")
console.log(a != 4) //at value level it's not different, that's right -> 4 != 4 -> false
console.log(a !== "4") //but at type level it's not the case, it throws true -> 4 !== 4 -> 4 !== "4" -> true

//wierd stuff: due to coercion of type, it 'converts' false to 0, and performs the comparisons: 
console.log("\twierd stuff\n")
console.log(0 == false) //0 == 0 --> true
console.log(1 == false) //1 == 0 --> false
console.log(2 == false) //2 == 0 --> false
console.log(3 == false) //3 == 0 --> false

console.log("\n\twierd stuff - Strict inequality:\n")
console.log(0 == "") // "" is transformed to 0 since it's empty 0 == "" -> 0 == 0
console.log(0 == " ") // same, " " is transform to 0 since it's empty 0 == " " -> 0 == 0
console.log(0 == '') // same, '' is transform to 0 since it's empty 0 == '' -> 0 == 0
console.log(0 == "Hello") // now, "Hello" is not empty, but it's not a number; 0 == "Hello" -> 0 == NaN, so, it's not a number
console.log(0 === "") // 0 === "" --> 0 | Strict comparison: number === string -> false (different types, there's no conversion)
console.log(undefined == null) //they both are true since there's no value from both sides
console.log(undefined === null) //however, using strict comparison throws a false, since they're different data types

/*Truthy values

All of the positive and negative values except for the zero and minus zero: 1, -1, 3.15
All non-empty text strings: "Hola", " ", "false", "0"
Arrays and objects (even when empty): {}, []
Special alues like: Infinity, -Infinity, functions and Symbols.

    In short: Any value that is not one of the 7 falsy values is truthy.

*/

/*falsy values (there are 7 falsy values):

1. 0 / -0
2. 0n (BigInt)
3. null
4. undefined
5. NaN
6. "" (empty strings)
7. false

    We can say "Everything in Js is truthy, except for these 7 above" :)

*/


//Logical operators

//and (&&)
console.log("\n\tLogical operators")

console.log("\nAND (&&):")
console.log(5 > 10 && 15 > 20) //none of the conditions are met, false :c
console.log(5 < 10 && 15 < 20) //both conditions are met, true c:
console.log(5 < 10 && 15 > 20) //one condition is met, the other is not, so false :c

//or (||)
console.log("\nOR (||):")
console.log(5 > 10 || 15 > 20) //none of the conditions are met, false :c
console.log(5 < 10 || 15 < 20) //both conditions are met, true c:
console.log(5 < 10 || 15 > 20) //one condition is met, the other is not, so true c:

//and (&&) and or (||)
console.log("\nAND (&&) and OR (||):")
console.log(5 < 10 && 15 > 20 || 22 > 20) //the condition before the AND is met, also at least pne of the other two, so true c:
console.log(5 < 10 && 15 > 20 || 22 < 20) //all of the conditions are not met, so false :c

//not (!)
console.log("\nnot(!):")
console.log(!(5 > 10 && 15 > 20)) //none of the conditions are met, however, by using ! we deny the false result; !false = true
console.log(!(5 > 10 || 15 > 20)) //same as the above

//ternary operators
console.log("\nternary operators:")
const isRaining = true

isRaining ? console.log("it's raining") : console.log("it's not raining")






