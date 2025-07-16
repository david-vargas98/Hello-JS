// ------------------------------------------------------- advanced structures

// advanced arrays - functional methods
let numbers = [1,2,3,4,5,6]

// foreach: executes a function for each array's element, it affects the original array
numbers.forEach(element => console.log(element))

// map: creates a new array but applies a function to each of the array elements, it creates a new array
let doubled = numbers.map(element => element * 2)
console.log(doubled)

// filter: filters elements based in a criteria or condition, as the map, it creates a new array
let pairs = numbers.filter(element => element % 2 === 0)
console.log(pairs)

// reduce: reduces the array elements; maybe a bunch of numeric array elements to a sum, or a words array to a single string
let sum = numbers.reduce((previous, current) => previous + current, 0) //here previous is an accumulator which is initialized to 0
console.log(sum)


// ---------------------------------- Array manipulation

// flat: it will flatten a nested array, i.e. converts an array which has sub-arrays into a single level array (or just less levels)

let nestedArray = [1, [2, [3, [4]]]]
let flatArray = nestedArray.flat() // by default flat() will get rid of 1 nested level -> [ 1, 2, [ 3, [ 4 ] ] ]
console.log(flatArray)

flatArray = nestedArray.flat(2) // it will get rid of 2 nested levels -> [ 1, 2, 3, [ 4 ] ]
console.log(flatArray)

// flatmap: combines flat and map; the operations will flatten the array but  based in a criteria
// so in this case the map part helps to trim each of the words using the space character, and flat part will flatten and then return an array

/**
 * Like this:
 * map (transformation):
 * "Hello world".split(" ") ---> ["Hello", "world"]
 * "Goodbye world".split(" ") ---> ["Goodbye", "world"]
 * Intermidiate result: [ ["Hello", "world"], ["Goodbye", "world"] ]
 * 
 * flat(1) (flattening):
 * converts the nested array into a plain one ---> ["Hello", "world", "Goodbye", "world"]
 */
let phrases = ["Hello world", "Goodbye world"]
let words = phrases.flatMap(phrase => phrase.split(" "))
console.log(words)


// sorting: as the name says, it sorts the elements of an array, however, we need to specify the criteria which will use to sort
// by default it sorts alphabetically, 
let unsorted = ["f", "d", "a", "z"]
let sorted = unsorted.sort() // for this example works pretty well, since is an array of letters
console.log(sorted)


unsorted = [3,4,1,6,10] // however, when we want to sort an array of numbers, we need to specify the criteria
sorted = unsorted.sort((n1, n2) => n1 - n2) // we say we want to sort the numbers based on the result of n1-n2
console.log(sorted)

/**Long explanation [3,4,1,6,10]:
 * First: n1 - n2 -> 3 - 4 = -1, so 3 goes before 4, it's OK -> [3,4,1,6,10]
 * Second:   ""   -> 4 - 1 = 3, so 4 goes after 1, not OK, change -> [3,1,4,6,10]
 * Third:    ""   -> 3 - 1 = 2, so 3 goes after 1, not OK, change -> [1,3,4,6,10] (it did a backtracking, it could vary depending on the browser's sorting algotiyhm)
 * Fourth:   ""   -> 4 - 6 = -2, so 4 goes before 6, it's OK -> [3,4,1,6,10]
 * Fifth:    ""   -> 6 - 10 = -4, so 6 goes before 10, it's OK -> [3,4,1,6,10] OK :D
 */

// reverse: another sorting operation, it reverses the order of the array, 
// heads up, this modifies the original array, i.e. it doesn't creates another one, so we don't need to assign it to a variable
sorted.reverse()
console.log(sorted)


// Search: is used to search for a particular element that could meet a criterion, instead of using a for or foreach loop

// includes: allows us to know if a certain element exists
console.log(sorted.includes(5))

// find: it allows us to find the FIRST element which meets a criterion (maybe using a more complex condition)
let firstEven = sorted.find(element => element % 2 == 0) // it will return "undefined" if there are no elements meeting the criterion
console.log(firstEven)

// findindex: it will return the index of the element 
let firstEvenIndex = sorted.findIndex(element => element % 2 == 0) // it will return "-1" if there are no elements meeting the criterion
console.log(firstEvenIndex)


// ---------------------------------- advanced sets

// operations

// elimination of duplicates (using SPREAD operator): we want to get rid of the repeated elements but we don't want to have a set, instead, 
// we wanna keep the array without repeated elements.

const numbersArray = [1,2,2,3,4,5,6,6] // array with repeated numbers

let numbersSet = new Set(numbersArray) // set creation, but we don't want that -> Set(6) { 1, 2, 3, 4, 5, 6 }
numbersSet = [new Set(numbersArray)] // this creates an array which contains a set, but we still don't want that either -> [ Set(6) { 1, 2, 3, 4, 5, 6 } ]
numbersSet = [...new Set(numbersArray)]  // however, this actually does create an array by using the spread operator -> [ 1, 2, 3, 4, 5, 6 ]

console.log(numbersSet)

// Joint operations

//  Union: we put two sets together and it takes only the different elements between them, i.e. repeated elements are not taken in account
const setA = new Set([1,2,3,4]) 
const setB = new Set([3,4,5,6,7,8])  // result of union should be ---> Set(8) { 1, 2, 3, 4, 5, 6, 7, 8 }

// const unionAB = new Set([...setA, ...setB]) // this is not correct -> Set(2) { Set(4) { 1, 2, 3, 4 }, Set(5) { 4, 5, 6, 7, 8 } }

const unionAB = new Set([...setA, ...setB]) // instead we use the spread operator again to spread the elements and make the union of both
console.log(unionAB)

//  Intersection: we put two sets together and it takes only the elements that are in both sets, i.e. common elements between two sets

/**First step -> [...setA]:
 * This creates a new set, where we use the spread operator to convert the set into an array
 * Example: setA = new Set([1, 2, 3, 4]) -> [...setA] -> [1, 2, 3, 4]
 * 
 * Second step -> .filter(element => setB.has(element)):
 * The array result is filtered, by just keeping the elements which also exists in setB.
 *  - setB.has(element) returns true if the element is within the setB.
 *  - Example: setB = new Set([3,4,5,6,7,8]), the filter will leave us [3, 4]
 * 
 * Final step -> new Set([...]):
 * Converts the filtered array back to a set (to remove duplicates, just in case) -> final result: Set {3, 4} 
 */
const intersectionAB = new Set([...setA].filter(element => setB.has(element)))
console.log(intersectionAB)

//  Difference: elements tha are within one set but aren't within the other set
const difference = new Set([...setA].filter(element => !setB.has(element))) // we retrieve the elements from setA which are not within setB
console.log(difference) // { 1, 2 } are not within setB

// set conversion: convert a set into an arrar
console.log(setA) // the actual set -> Set(4) { 1, 2, 3, 4 }
console.log(...setA) //we spread the set elements -> 1 2 3 4
console.log([...setA]) //we convert into in array by putting the spreaded elements inside of "[]" -> [ 1, 2, 3, 4 ]

//  Iteration: perhaps we just want to access the elements and not convert them into an array

// foreach: we perform an action for each element
setA.forEach(element => console.log(element))

// operations like filter, map, etc are unique for arrays, so you need to make the conversion :/


// ---------------------------------- advanced maps

// remember that we are dealing with key-value collections, so we have efficient methods to quickly access a specific element or data

// operations
let myMap = new Map([
    ["name", "Edgar"],
    ["age", 26]
])

console.log(myMap)

// when we try to access to the pairs, it goes first the value and then the key
myMap.forEach((value, key) => console.log(`Key: ${key} | Value: ${value}`))

// conversion: map to an array

const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap)

// conversion: map to objects
const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)

// conversion: object to map
const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject)