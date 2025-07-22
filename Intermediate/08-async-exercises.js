//1. crea una función para saludar que reciba un nombre y un callback, 
//   el callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]"
function greeting(name, callback){ setTimeout(() => callback(name), 2000) }
greeting("Edgar", (name) => console.log(`Hello, ${name}`))

//2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//   Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.
function task1(callback){ setTimeout(() => callback(), 1000) }
function task2(callback){ setTimeout(() => callback(), 1000) }
function task3(callback){ setTimeout(() => callback(), 1000) }

setTimeout(() => {
    console.log("Executing Callback task1...")
    task1(() => {
        console.log("Callback task1 executed.")
        console.log("Executing Callback task2...")
        task2(() => {
            console.log("Callback task2 executed.")
            console.log("Executing Callback task3...")
            task3(() => console.log("Callback task3 executed."))
        })
    })
}, 4000)

//3. Crea una función para verificar un número que retorne una Promesa. 
//   Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//   Si el número es impar, la promesa se rechaza con el mensjae "Número impar".
function verifyNumber(number){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(number % 2 === 0)
                resolve("Even number.")
            else
                reject("Odd number.")
        }, 4000)
    })
}

let n = 4
setTimeout(() => {
    verifyNumber(n)
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("The 'verifyNumber' task has ended."))
}, 8000)

//4. Crea tres funciones que devuelvan promesas: 
//   firstTask(): tarda 1s y muestra "Primera tarea completada". 
//   secondTask(): tarda 2s y muestra "Segunda tarea completada". 
//   thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".
function firstTask(ms){
    return new Promise(resolve => {
        setTimeout(() => resolve(console.log("Promise - First task completed.")), ms)
    })
}

function secondTask(ms){
    return new Promise(resolve => {
        setTimeout(() => resolve(console.log("Promise - Second task completed.")), ms)
    })
}

function thirdTask(ms){
    return new Promise(resolve => {
        setTimeout(() => resolve(console.log("Promise - Third task completed.")), ms)
    })
}

setTimeout(() => {
    console.log("\n\tPromises executions")
    console.log("Promise tasks starting...")
    firstTask(1000)
        .then(() => secondTask(2000))
        .then(() => thirdTask(1500))
}, 17000)

//5. Transforma el ejercicio anterior de promesas en una función async/await llamada executeTasks()
async function executeTasks(){

    console.log("\n\tAsync executions")

    await firstTask(1000)
    console.log("Async - First task executed.")

    await secondTask(2000)
    console.log("Async - Second task executed.")

    await thirdTask(1500)
    console.log("Async - Third task executed.")
}

setTimeout(() => executeTasks(), 22000)

//6. crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s) 
//   Si el id es menor a 5, la promesa se resuelve con { id, nombre: "usuario " + id }
//   Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//   Usa async/await para llamar a getUser(id) y maneja los errores con try/catch
function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(id < 5)
                resolve({ id, nombre: "Edgar" + id })
            else
                reject("User was not found.")
        }, 2000)
    })
}

async function fetchUser(id) {
    try{
        const user = await getUser(id)
        console.log("User was found:", user)
    } catch(error){
        console.error("Error: ", error)
    }
}

setTimeout(() => {
    console.log("\n\tAPI Simulation")
    fetchUser(4) // OK
    fetchUser(5) // error
}, 27000)



//7. intenta predecir el resultado de este código antes de ejecutarlo en la consola:
setTimeout(() => {
    console.log("\n\tPrediction execution")
    console.log("Start") // prediction: this will be printed very first
    setTimeout(() => console.log("SetTimeout executed"), 0) //prediction: this will be printed as second instruction
    Promise.resolve().then(() => console.log("Promise resolved.")) //prediction: this will be printed as third instruction
    console.log("End") // prediction: this will be printed as second prediction
}, 31000);

// real order: Start -> End -> Promise resolved -> SetTimeout executed
// 1- due to Start is a synchronous task it goes to the "call stack" and gets executed immediately
// 2- the same for End, as is a synchronous task, it just goes to the "call stack" and gets executed immediately
// 3- after that, Promise.resolve() is executed in the call stack, but the Promise callback ".then(...)" is moved to the MicroTask Queue
// 4- then, setTimeout() is executed in the call stack, but its callback is moved to the Task Queue, and waits for the call stack and MicroTask queue to be empty
// once synchronous tasks were executed, the Promise checks if the call stack is empty, if so, the Promise callback is moved to it and gets executed,
// and finally, the setTimeout() checks if there is something inside the MicroTask queue, if there isn't, then also checks the call stack and if
// there isn't any synchronous task as well, then the setTimeout goes to the call stack and gets executed

// Summary,
//1. Call Stack: synchronous stuff gets executed (Start, End, Promise.resolve(), setTimeout()).
//2. Microtask Queue: executes the callback from the promise (.then).
//3. Task Queue: Executes the callback from the setTimeout.

//8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos. 
//   A continuación, usa Promise.All() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen
function promiseOne(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("First promise with 1000 ms")
            resolve("First done.")
        }, 1000)
    })
}

function promiseTwo(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Second promise with 2500 ms")
            resolve("Second done.")
        }, 2500)
    })
}

function promiseThree(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Third promise with 1500 ms")
            resolve("Third done.")
        }, 1500)
    })
}

// simpler way:
// setTimeout(()=> {
//     console.log("\n\tPromise.all()")
//     Promise.all([promiseOne(), promiseTwo(), promiseThree()])
// }, 30000)

// catching errors:
setTimeout(async ()=>{
    console.log("\n\tPromise.all()")
    try{
        const results = await Promise.all([
            promiseOne(),
            promiseTwo(),
            promiseThree()
        ])
        console.log("All promises were resolved!", results)
    }catch(error){
        console.error("At least one of the promises has failed", error)
    }
}, 32000)

//9. crea una función esperarSegundos(segundos) que use setTimeout dentro de una promesa para esperar la cantidad de segundos indicada. 
//   A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en en consola.
function waitMiliseconds(ms){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Time finished after ${ms} seconds.`)
        }, ms)
    })
}

let seconds = 3000

async function executeWait() {
    console.log("\n\tasync/await exercise")
    const result = await waitMiliseconds(seconds)
    console.log(result)
}    

setTimeout(() => executeWait(), 38000)

//10.  Crea una simulación de un cajero automático usando asincronía.
//     - La función CheckBalance() tarda 1s y devuelve un saldo de $500
//     - La función withDrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.
//     
//     Posible salida esperada:
//     Saldo disponible: $500
//     Retirando $300...
//     Operación exitosa, saldo restante: $200
//     Retirando $300...
//     Error: fondos insuficientes 

function CheckBalance(){
    return new Promise((resolve) => {
        setTimeout(() => resolve(500) , 1000) // here we set the initial balance
    })
}

function withDrawMoney(currentBalance, amountToWithdraw){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(amountToWithdraw <= currentBalance)
                resolve(currentBalance - amountToWithdraw)
            else
                reject("Insufficient funds.")
        }, 2000)
    })
}

// exmple of what you musn't do (callback hell):
// const promise = CheckBalance()
// promise
//     .then(balance =>{
//         console.log(`Balance available: $${balance}`)
//         withDrawMoney(balance)
//         .then(result => {
//             console.log(`Withdrawing $${result.withDraw}`)
//             const remainingBalance = result.balance - result.withDraw
//             console.log(`Successfull operation, remaining balance: $${remainingBalance}`)
            
//             withDrawMoney(remainingBalance)
//             .then(result => {
//                 console.log(`Withdrawing $${result.withDraw}`)
//                 const remainingBalance = result.balance - result.withDraw
//                 console.log(`Successfull operation, remaining balance: $${remainingBalance}`)
//             })
//             .catch(error => console.log(`An error ocurred: ${error}`))
//         })
//         .catch(error => console.log(`An error ocurred: ${error}`))
//     })

// instead, use async/await
async function atmOperations() {
    try{
        console.log("\n\tBank withdraw exercise")

        const balance = await CheckBalance()
        console.log(`Available balance: ${balance}`)

        const withdraw = 300
        console.log(`Withdrawing $${withdraw}...`)
        const newBalance = await withDrawMoney(balance, withdraw)
        console.log(`Successfull operation, remaining balance: ${newBalance}`)

        console.log(`Second withdrawing $${withdraw}...`)
        const finalBalance = await withDrawMoney(newBalance, withdraw)

        await waitMiliseconds(3000)
        console.log("Time finished.")
        
    }catch(error){
        console.log(`An error ocurred: ${error}`)
    }
}

setTimeout(() => atmOperations(), 42000)