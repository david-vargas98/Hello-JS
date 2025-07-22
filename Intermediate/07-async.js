// asynchronous programming: the ability to run more than one task at the same time, so as not to not stop the application execution

// let's make a comparison

// -------------- synchronous code: the code is ruuning sequentally, instruction by instruction

console.log("Start")

for(let i = 0; i < 1000000000; ++i){} // simulating call to a DB, this will take some time, and the application will be stopped during that time

console.log("End\n")

// ----- Event Loop: JavaScript continuously runs an infinite loop to determine how and when code should be executed.
// It works with three main components:

// 1. Call Stack: This is where functions are executed in order — it handles regular (synchronous) function calls.
// 2. Web APIs (in browsers) or Node.js APIs: JavaScript delegates asynchronous tasks (like setTimeout, fetch, etc.) to these systems.
// 3. Callback Queue (Task Queue) & Microtask Queue: Once async tasks complete, their callbacks are stored here until the Call Stack is empty.

// ----- Event loop workflow: 
// The event loop follows a consistent, predictable order of checks:

// 1. Call Stack: It starts by executing whatever is currently in the Call Stack.
// 2. Async Delegation: If asynchronous functions (e.g., setTimeout) are called, they are offloaded (delegated) to Web APIs or Node.js APIs.
// 3. Callback Queues (task ends): When these async tasks finish, their callbacks are moved to either the Task Queue or Microtask Queue.
// 4. Call Stack Check (is empty?): The event loop checks if the Call Stack is empty. If it is:
//    - It first moves Microtask Queue callbacks (e.g., Promises) to the Call Stack. (Microtask Queue has priority over Task Queue)
//    - Then it moves Task Queue callbacks (e.g., setTimeout) if any.
// 5. The cycle repeats continuously.



// -------------- asynchronous code: the code is ruuning several tasks at the same time, this avoids blocking the application

// -- callbacks: remember, is a function that is passed to another function as a parameter, and it is executed when the operations has ended...
//               ...it was the first mechanism used to handle asynchronous operations

console.log("Start") // 1.first: this is stacked and then gets executed

setTimeout(() => {
    console.log("It's running after two seconds.") // 2.first this is stacked but the callback is sent to the API, so waits in the Microtask/Task Queue until the stack is empty
                                // 4. the event loop takes the callback from the Queue and stacks it into the stack to get executed
}, 2000) // here we are saying "run after 2 seconds"

console.log("End") // 3.second: this is also stacked and then gets executed, the stack is now empty

// Big problem ---> callback HELL: if we start to make use of a lot of callbacks, if we run some asynchronous tasks that will be chained together, 
//                                 the callback code starts to become quite difficult to handle
// Example:
function step1(callback){
    setTimeout(() => {
        console.log("Step 1: completed.")
        callback() // after completing setp1 I need to notify backwards
    }, 1000)
}
function step2(callback){
    setTimeout(() => {
        console.log("Step 2: completed.")
        callback() // after completing setp1 I need to notify backwards
    }, 1000)
}
function step3(callback){
    setTimeout(() => {
        console.log("Step 3: completed.\n")
        callback() // after completing setp1 I need to notify backwards
    }, 1000)
}

step1(() => {
    step2(() => {
        step3(() => {
        })
    })
    console.log("All of the steps have been completed.")
})

// Promises: a better approach to solve the "callback hell/pyramid of doom" problems coming from the callbacks.
//           it's a value that could be available NOW, in the future or NEVER. So, the asynchronous action is made but we don't know what is 
//           going to happen, so yes, it's a PROMISE! XD

// the initial state of a promise is "pending", i.e. the operation hasn't been completed
const promise = new Promise((resolve, reject) => { // as you can see, this is still a callback, a function that we'll end up invoking after the promise is resolved and tells us if it's resolved or rejected
    setTimeout(() => {
        const ok = false // we imagine that the operation went ok
        if(ok){
            resolve("Operation succeded.") // this triggers ".then()" and passes the "Operation succeded." text as argument to "result"
        } else{
            reject("An error has ocurred.") // this triggers ".catch()" and passes the "An error has ocurred." text as argument to "error"
        }
    }, 4000); // waits 4 seconds to be executed (it simulates the asynchronous operation)
})

promise
    .then(result => {      // if the operation is resolved we use "then" to get the result
        console.log(result)
    })
    .catch(error => {      // but if the promise actually is rejected, this block will be invoking instead of "then"
        console.log(error)
    })
    .finally(() =>{        // it is a code block that will be executed always, it's similar the "finally block" related to exceptions
        // we don't need to execute something, just for your information
    })

// --- Chain of promises: rememnber callback hell? Well, is the same but maybe promises can do the job better
function step1_Promise(callback){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Promise - Step 1: completed.")
            resolve() // we don't return anything, it just indicates that is done
        }, 1000)
    })
}

function step2_Promise(callback){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Promise - Step 2: completed.")
            resolve()
        }, 1000)
    })
}

function step3_Promise(callback){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Promise - Step 3: completed.")
            resolve()
        }, 1000)
    })
}

// as you can see, this is better, legible and controlled, calling promises one after another in an ordered way, instead of the callback hell
step1_Promise()
    .then(step2_Promise)
    .then(step3_Promise)
    .then(() => {
        console.log("All of the steps were completed.")
    })

// ----- Async/Await: this is the most modern way to make callbacks, firstly we had callbacks itself, then promises (which are mouch better), 
//                    and lastly, we have the async/await syntax 

// async: makes a function asynchronous
// await: pause execution until the promise is resolved

// example: it is only necessary to put the word "async" before the word "function"

// a function to simulate the wait
function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function process(){ // by using async we indicaste this function as a asynchronous one, as simple as that
    console.log("Start of process")

    await wait(5000) // we need to indicate that a function is async, instead of a callback we use the word "async" before the function call
    console.log("Process after 5 seconds.")

    await wait(1000)
    console.log("Process after 1 more second.")

    await wait(2000)
    console.log("Process after 2 more seconds.")

    console.log("End of process")
}

process()