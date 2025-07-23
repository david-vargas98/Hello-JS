// APIs: at the end we need to interact with external systems, imagine within the front-end we need to request resources, maybe we will
//       end up accesing to another application that might be external in reference to my application, or maybe we I to access to my own 
//       server (a remote server, basically) and I have to communicate with it one way or another, so, how can I do this? 
//       We do this by folllowing two principles: 
//       1- It must be done in a secure way 
//       2- It must be done in a standardized way
//       In other words, I must know if I have to end up talking to an external system, I have to know how to talk! So, we need a contract
//       to reach an agreement between us, since maybe the server is programmed in a certain language and maybe the front-end is programmed
//       using another one. So the contract stablishes how the systems can interact with each other,let's put it this way:
//       The server could say: "If you do this, then I will do this you're asking for."

// And how do we do this? Well, basically by using an API
// In short, an API is a set of rules and/or protocols that allows us to communicate between different applications. It could be a web 
// application, mobile application, an application deployed on a server, etc.
// For example: If I want to use chatgpt from my applicaton and pass data to it, how do I do it? Well, by using an API.
// So, all of these systems will be probably using an API to fetch data from different external services.

//API REST: There are a vast number of APIs across the web, as well as programming languages for examplee, however, the most widely used API
//          type would probably be REST Full APIs, are the most common, cause' they're based on the HTTP protocol and make use of URLs, so, 
//          REST API make use of HTTP protocol for communication and the URLs for getting access to the information.
//          Another API type: SOAP, 20 years ago it was the standard but when REST APIs appeared they became obsolete, why? Because REST APIs
//          are more powerfull, flexible and faster to implement.
//          In addition, it is normal to work with JSON objects (objects used to exchange data)

// In short, the sum of 3 standards (HTTP + URLs + JSON) is what makes up REST APIs


// --------------------------- HTTP Methods: REST API makes use of HTTP methods to communicate between systems
// There are some HTTP methods, but the most common ones are:
// - GET: used to request data, we use it to say "hey! give me the data from this URL"
// - POST: used to send data, data that will end up creating a new resource (maybe a new user creation)
// - PUT: used to modify/update data (perhaps an update of user information)
// - DELETE: used to delete data (we could request the server to delete a resource)



// --------------------------- HTTP Response code: is the server response to the HTTP request, the more common ones are the following:
// - 200 OK: this response indicates success
// - 201: this response indicates success and also it says the resource was created
// - 400: this response indicates an error from the client (front-end)
// - 404: this response indicates "not found", something that don't even exists was requested
// - 500: this response indicates an error from the server (back-end)

// --------------------------- API consumption

//GET
fetch("https://jsonplaceholder.typicode.com/posts") // we make the request
    .then(response => {  // we get the JSON response (headers, body)
        return response.json() // the response is transformed to json format and it will be returned for the next then()
    })
    .then(data => { // we get the actual data that was previously returned with json format
        console.log(data) // printing the data to the console
    })
    .catch(error => {
        console.log("An error ocurred.", error)
    })


// --------------------------- Async/await en APIs: same example as above but using async/await

async function getPosts(){

    try{
        // the request is made asynchronously
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")

        // after the waiting for the response, we tranform the response into a json
        const data = await response.json()
    
        console.log(data)
    }catch(error){
        console.log(`An error ocurred: ${error}`)
    }
}

setTimeout(() => {
    console.log("\n\tGet: using async/await")
    getPosts()
}, 1000)


//POST: we need to indicate that the fetch operation will be done by using POST

// POST request

async function createPost(){
    try{
        const newPost = { // new post data to be inserted by using post
            userId: 1,
            title: "This is the post's title hehe",
            body: "This is the post's body hehe"
        }

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST", // we specify the method post
            headers: { // we add some headers, to tell the api how I want to interact with it
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost) // in this part we have to set the data we are sending to the server and we convert it to JSON
        })

        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log("An error ocurred:", error)
    }
}

setTimeout(() => {
    console.log("\n\tCreating post")
    createPost()
}, 2000)


/// ------------- Tools for making HTTP requests
// 1. Postman
// 2. Apidog
// 3. Thunder Client: VSCode extension


/// ------------- Error handling: the need to control the code responses, since a 404 is not an error or exception, is a valid response
setTimeout(() => {
    console.log("\n\tError handling")

    fetch("https://jsonplaceholder.typicode.com/non-existing") 
    .then(response => {
        if(!response.ok)  // if(response.status == 200) this is valid, instead we use "ok" for all 200 status, 201, 202, etc
            throw new Error(`HTTP ${response.status} Error`)
        return response.json()
    })
    .catch(error => {
        console.log(error)
    })
}, 4000)


/// ------------- Additional HTTP methods: the less common methods
// - PATCH: is used to partially update a resource
// - OPTIONS: it allows us to request the server what HTTP methods are allowed for a resource 

// PATCH
async function partialPostUpdate(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", { // the url now poinst to the post to update
            method: "PATCH", // PATCH indicates a partial update
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title: "This is a patch update."}) // we don't need to pass all of the object, just a part we need to update
        })

        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log("An error ocurred:", error)
    }
}

setTimeout(() => {
    console.log("\n\tPartially updating the post")
    partialPostUpdate()
}, 5000)


/// ------------- Authentication by using API Key: it's a personal key, in that way when we call the API we'll pass it a key associated to us
//                This is useful when we don't want to allow access publicly

// API with auth: https://home.openweathermap.org/
//Example:
async function getWheater(city) {
    const apiKey = "1f2536dfb8ed9592a0579d939f90f475" // apikey to authenticate the user
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log("Error", error)
    }
    
}

setTimeout(() => {
    console.log("\n\tWeather API call")
    getWheater("Guadalajara")
}, 6000)

// -------------- another authentication and authorization methods
// Bearer Tokens: Any string could be a bearer token, example: "abc123". Depends on HTTPS, simple, example: Authorization: Bearer <token>
// JWT (JSON Web Token): structured token, example: "xxxx.yyyy.zzzz". Depends on HTTPS and auto-contained, example: Authorization: Bearer <JWT>

// Both of the above are sent whithin the header to send them in a safe way

// -------------- APIs versioning: what if I have an API which I eant to evolve or modify, it comes out that we need to change the APIs at some 
//                                 time,  what would happen with all the people that rely on it?
// Imagine this API: http://api.example.com/reosurces
// most of the times, whis versioning is handled by doing this: http://api.example.com/v1/reosurces, http://api.example.com/v2/reosurces
// In that way we assure that the specification of the API will always be available y always will comply with the established standard 

// -------------- More APIs
// PokéAPI: https://pokeapi.co/

// Quick example:
async function getPokemon(pokemon) {
    //const apiKey = "1f2536dfb8ed9592a0579d939f90f475" // apikey to authenticate the user
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(`${data.name}'s abilities:`)
        data.abilities.forEach(ability => {
            console.log(`- ${ability.ability.name}`)
        });
    }catch(error){
        console.log("Error", error)
    }
    
}

setTimeout(() => {
    console.log("\n\tPokéAPI call")
    getPokemon("pikachu")

}, 7000)
