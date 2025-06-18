// sets

//Declaration: unlike the arrays, sets must be initialized using new Set() XDDD
let mySet = new Set() //empty set

//Initialization by passing data

mySet = new Set("Edgar", "Alan", "Pepe", "Aldo", true, 34) //this is wrong xdd it'll take each character from the first element
console.log(mySet)

mySet = new Set(["Edgar", "Alan", "Pepe", "Aldo", true, 34]) //this ok :D
console.log(mySet)


//common methods

// add (adds elements to the set) and delete (delete elements from the set)

//add
mySet.add("ew") //adds the element at the end
console.log(mySet)

//delete
mySet.delete(34) //deletes the element which we indicate, it needs to be the specific element value, such as "Aldo", 34, etc
console.log(mySet)
 
console.log(mySet.delete("Aldo")) //apart from deleting the element, it also says if it was possible, returning a true or false
console.log(mySet.delete("Aldo")) //it returns a false, since "Aldo" no longer exists within the set anymore


//has: it checks if an element exists within the set
console.log(mySet.has("Alan")) //it exists
console.log(mySet.has("Aldo")) //it does not exists anymore since we've already deleted that one

//size: it allows us to know the size of the set, again it's a PROPERTY, NOT a METHOD
console.log(mySet)
console.log(mySet.size)

//convert a set to an array
let myArray = Array.from(mySet)
console.log(myArray)

//convert an array to a set
let fromArrayToSet = new Set(myArray)
console.log(fromArrayToSet)


//BUUUUT, what's the main difference between arrays and sets? Well, check this out:
fromArrayToSet.add("Alan") //this element already exists within the set
console.log(fromArrayToSet) //the previous element wasn't added, since the difference is that sets conatins UNIQUE ELEMENTS
fromArrayToSet.add("Alan")
fromArrayToSet.add("Alan")
fromArrayToSet.add("Alan") //you can try as much as you want, however, the set will still without duplicate elements
console.log(fromArrayToSet)

// summary, the data structure called "set" DOES NOT ALLOW DUPLICATES, unlike array, which allows duplicate elements

//however if you add the "same" elements, let's say, chaning just a letter, it will be accepted by the set
fromArrayToSet.add("alan") //it's inserted into the set since "alan" != "Alan"
console.log(fromArrayToSet)

