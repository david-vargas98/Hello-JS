//data structures -> arrays yeeeei

//how to declare them
let myArray = []  //one way
let myArrayTwo = new Array() //other way

console.log(myArray, myArrayTwo) //it is recommended to use first one since is clearer and leaves no room for error

//Initialization

myArray = [1] //inserting an elment into the array
myArrayTwo = new Array(1) //it allocates a space in memory for the passed value

console.log(myArray, myArrayTwo)

//insrting more values

myArray = [1,2,3,4,5]
myArrayTwo = new Array(1,2,3,4,5) //now the behaviour is the same as the brackets way

console.log(myArray, myArrayTwo)

myArray = ["Edgar", "Alan", "Pepe", "Aldo", true, 34]
myArrayTwo = new Array("Edgar", "Alan", "Pepe", "Aldo", true, 34) //the behaviour is the same with strings, numbers, booleans, etc
console.log(myArray, myArrayTwo)

//inserting values at certain positions
let myArrayThree = new Array(3)
myArrayThree[0] = "First"
myArrayThree[1] = "Second"
myArrayThree[2] = "Third"
myArrayThree[4] = "extra" //however, if we put an extra element that exceeds the actual size, it'll be resized, it's wierd xd


console.log(myArrayThree)

//let's create and fill an array without specifying size

let myNewArray = []

myNewArray[2] = "first" 
myNewArray[1] = "last"
myNewArray[0] = "middle"

console.log(myNewArray)  //it's allocating space in memory in a dynamically way, instead of indicating size, e.g: new Array(3)

//Common methods

let arrayMethods = []

//main methods: push (inserts elements into the array) and pop (removes the element at the end of the array)
arrayMethods.push("edgar")
arrayMethods.push("edgarTwo")
arrayMethods.push("edgarThree")
arrayMethods.push("edgarFour")

console.log(arrayMethods)

console.log(arrayMethods.pop()) //last element removed, the method returns the element, so we can track this element after it was removed
arrayMethods.pop() //last element removed

console.log(arrayMethods)

//another common (not much) pair of methods - shift and unshift

console.log(arrayMethods.shift()) //shift removes the FIRST array element and it returns it just like pop does
console.log(arrayMethods)

arrayMethods.unshift("me", "other me") //this method is used to insert one or more elements at the beginning of the array 
console.log(arrayMethods)

// length - It's a PROPERTY, it isn't a function

console.log(arrayMethods.length)


// slice - it returns a superfitial copy of a portion, it's the way to create a new array but using this "portion" we want
arrayMethods.push(34) //first we eceute a push to make the array bigger
console.log(arrayMethods)

let myOtherNewArray = arrayMethods.slice(0, 3) //it takes from the intial index to the end index (not inclusive, i.e: 0,1,2)
console.log(myOtherNewArray)

//splice - it removes the elements between the range you pass to it
arrayMethods.push(3, 4) //we add more elements xdd
arrayMethods.splice(1, 3) //it removes the elements, first argument is the beginning and second argument is the number of elements
console.log(arrayMethods)

//also, splice can
arrayMethods.splice(1, 2, "New element") //first argument says the index to start removing elements; second one says the number of elements
console.log(arrayMethods)  //to remove; the third one says that after the previuous were done, then insert the 3 on that position


// finally, clear (this function does not exists pipipi), in order to clear the array, we need to initialize the array again
arrayMethods = []
arrayMethods.length = 0 //we can also use this way, but it's not recommended, it's an alternative, but don't get use of it
console.log(arrayMethods)
