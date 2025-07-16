//1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección 
let prices = [100, 40, 12, 55, 33, 58, 190]
let budget = 300
let totalWorth = prices.reduce((accumulator, price) => accumulator + price , 0)

console.log("\tItems without discount:")
prices.forEach(price => console.log(price))

console.log(`Your budget is "${budget}".\nThe total worth of items is ${totalWorth}.\nSo you can only buy the ${(budget * 100 / totalWorth).toFixed(2)}% of the total number of items.`)

const discountApplied = prices.map(item => item * 0.8) // we appply a 20% discount to each item
let totalWorthDiscount = discountApplied.reduce((accumulator, price) => accumulator + price , 0)

console.log("\tItems with 20% discount:")
discountApplied.forEach(item => console.log(item.toFixed(2)))

console.log(`Your budget is "${budget}".\nThe total worth of items is ${totalWorthDiscount}.\nSo you can only buy the ${(budget * 100 / totalWorthDiscount).toFixed(2)}% of the total number of items.`)

const getRidOfExpensiveItem = discountApplied.filter(item => item < 100)
let totalWorthgetRidOfExpensiveItem = getRidOfExpensiveItem.reduce((accumulator, item) => accumulator + item, 0)

console.log(`\t\nIf we filter the items that cost more than 100 bucks your percentage goes up to ${(budget * 100 / totalWorthgetRidOfExpensiveItem).toFixed(2)}`)

//2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
const numberArray = [1,2,3,4,5,6,7,8,9,10]
const cubedNumbers = numberArray.map(number => number**3).filter(number => number % 2 != 0)
console.log(`\nFiltering pairs: ${cubedNumbers}`)



//3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
const transactionsPerDay = [[112, 100, 223], [332, 200], [443, 400], [310, 200], [142, 140]]
const flatTransactions = transactionsPerDay.flat()
console.log(`Total day transactions: $${flatTransactions.reduce((accumulator, transaction) => accumulator + transaction, 0)}`)

const transactionsPerDayWeek = [["Monday", 112, 100, 223], ["Tuesday", 332, 200], ["Wednesday", 443, 400], ["Thursday", 310, 200], ["Friday", 142, 140], ["Saturday", 342, 240], ["Sunday", 444, 1240]]
console.log(transactionsPerDayWeek)

const flatTransactionsWeek = transactionsPerDayWeek
.flatMap(dayWeek => dayWeek.filter(element => typeof element === "number" && element > 0))
.reduce((accumulator, transaction) => accumulator + transaction, 0)

console.log(`Total week transactions: $${flatTransactionsWeek}`)


//4. orderna un array de números de mayor a menor -> [1,2,3,4,5,6,7,8,9,10]
const numberArrayDescending = numberArray.sort((leftNumber, rightNumber) => rightNumber - leftNumber) 
console.log(numberArrayDescending) // if the "b-a -> 2-1 = 1" subtraction result is positive "b" goes first, if it isn't, then "a" goes first

//5. dados dos sets, encuentra la unión, la intersección y la diferencia entre ellos
const setA = new Set(["Edgar", "Carlos", "Héctor", "René", "Alberto"])
const setB = new Set(["Alan", "Carlos", "Diego", "Ismael", "Samuel"])
console.log(setA)
console.log(setB)

const setABUnion = new Set([...setA], [...setB])
console.log("Union: ", setABUnion)

const setABIntersection = new Set([...setA].filter(element => setB.has(element)))
console.log("Intersection: ", setABIntersection)

const setABDifference = new Set([...setA].filter(element => !setB.has(element))) // elements from setA which are not within setB
console.log("Difference - elements from setA which are not within setB: ", setABDifference)

const setBADifference = new Set([...setB].filter(element => !setA.has(element)))
console.log("Difference - elements from setB which are not within setA: ", setBADifference)


//6. itera los resultados del ejercicio anterior
console.log("\tIteration - setABUnion")
setABUnion.forEach(element => console.log(element))

console.log("\tIteration - setABIntersection")
setABIntersection.forEach(element => console.log(element))

console.log("\tIteration - setABDifference - elements from setA which are not within setB")
setABDifference.forEach(element => console.log(element))

console.log("\tIteration - setBADifference - elements from setB which are not within setA")
setBADifference.forEach(element => console.log(element))

//7. crea un mapa que almacene información de usuarios (nombre, edad y email) e itera los datos
console.log("\n\tIterations - UserInfo Map")
const usersInfo = new Map()

usersInfo.set(1, {
    name: "Edgar",
    age: 26,
    email: "edgar@test.com"
})

usersInfo.set(2, {
    name: "Ismael",
    age: 16,
    email: "ismael@test.com"
})

usersInfo.forEach((userData, key) => {
    console.log(`ID: ${key}`)
    console.log(`Name: ${userData.name}`)
    console.log(`Age: ${userData.age}`)
    console.log(`Email: ${userData.email}`)
})

//8. dado el mapa anterior, crea un array con los nombres
// 1st option
const namesArray = Array.from(usersInfo) //array conversion
console.log(namesArray) // how it looks (new array)
console.log(namesArray.map(pairKeyValue => pairKeyValue[1].name)) // accessing to the name property

// 2nd option
const namesArray2nd = [...usersInfo] // conversion into a pair Array 
console.log(namesArray2nd) // new array
console.log(namesArray2nd.map(([key, value]) => value.name)) // pair decomposition (we ignore key) and accessing to name property

//9. dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transformalo a un set
const olderUsersArray = Array.from(usersInfo)
.filter(pairKeyValue => pairKeyValue[1].age >= 18)
.map(pairKeyValue => pairKeyValue[1].email)

console.log(olderUsersArray)

//10. transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario, 
// y como valor todos los datos del usuario
const fromMapToObject = Object.fromEntries(usersInfo)
console.log(fromMapToObject)

/**
 * Object.values() takes values and ignore the keys
 *  from ---> '1': { name: 'Edgar', age: 26, email: 'edgar@test.com' } only takes { name: 'Edgar', age: 26, email: 'edgar@test.com' }
 *  
 *  so that, we get an array which contains only the user objects, after that we simply use map() for mapping [user.email, user]:
 *  from { name: 'Edgar', age: 26, email: 'edgar@test.com' } to ---> ['edgar@test.com', { name: 'Edgar', age: 26, email: 'edgar@test.com' }]
 */
const fromObjToMap = new Map(Object.values(fromMapToObject).map(userObj => [userObj.email, userObj]))
console.log(fromObjToMap)
