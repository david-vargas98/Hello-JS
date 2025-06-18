//Map (or a dictionary): it's a collection of elements. The elements within the map are made up of a pair (key: value)
//it's useful since we will look up using the key to get its associated value within the map

//declaration
let myMap = new Map() //empty map
console.log(myMap)

// initialization: we initialize the map with 3 elements, each of them formed by a key and a value
myMap = new Map([
    ["mame", "Edgar"],
    ["email", "edgar@mail.com"],
    ["Age", 26]
])

let copyMap = new Map(myMap) //IT'S USED ON THE PROPERTIES SECTION (starts from line 51)

console.log(myMap)

// methods and properties

// set: it works to add or update an element

myMap.set("alias", "ed_dev") //adding new key
myMap.set("name", "David") //updating an existing key

//you see? It's like the structure of set, there can't be duplicates of the key values, they're unique
//so, if the key does not exists, it will add it, otherwise, if the key does exists, then the value is updated

console.log(myMap)

//get: it works to fetch the value

console.log(myMap.get("alias")) //we use the key to search for its value
console.log(myMap.get("apellido")) //the key does not exists :p, returns "undefined", for that case there exists the "has" method

//has: it works to find out if a map has a specific key
console.log(myMap.has("alias")) //it returns true, since that key exists within the map
console.log(myMap.has("aliasDos")) //it returns false, since that key does not exists within the map

//delete: it works to delete a key by using the key itself
console.log(myMap.delete("alias")) //returns a true, since the key existed and was deleted
console.log(myMap.delete("alias")) //returns a false, since the key didn't exist

console.log(myMap)

//clear: if we want to get rid of all the keys, just use the clear method

myMap.clear()
console.log(myMap)

//more methods and some properties

//keys()
console.log(copyMap.keys()) //it returns a list with the keys only
//values()
console.log(copyMap.values()) //is the same for the values
//entries()
console.log(copyMap.entries()) //again, it returns a list, but including both keys and values
//size
console.log(copyMap.size) // it returns the map size