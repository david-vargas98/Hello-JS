//1. Realiza una petición GET con fetch a JSONPlaceholder y muestra en la consola la lista de publicaciones 
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })


//2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error
setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/ports")
    .then(response => {
        if(!response.ok)
            throw new Error(`HTTP ${response.status}`)
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error(`Request failed | ${error}`)
    })
}, 2000)
    

//3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas
async function getPosts(){
    console.log("\n\tAsync/await - Get Posts")

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")

        if(!response.ok)
            throw new Error(`HTTP ${response.status}`)

        const data = await response.json()

        console.table(data)

    }catch(error){
        console.error(`Request failed | ${error}`)
    }
} 

setTimeout(() => {
    getPosts()
}, 3000)


//4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body
async function postRequest(){
    try{
        console.log("\n\tAsync/await - POST")

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                title: "new post",
                body: "new body",
                userId: 10
            })
        })

        const data = await response.json()
        
        console.table(data)
    }catch(error){
        console.error(`Post request failed | ${error}`)
    }
}

setTimeout(() => {
    postRequest()
}, 4000)

//5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación)
async function putRequest(){
    try{
        console.log("\n\tAsync/await - PUT")

        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                title: "Modified title",
                body: "Modified body",
                userId: 10,
                id: 1
            })
        })

        if(!response.ok)
            throw new Error(`HTTP ${response.status}`)

        const data = await response.json()

        console.table(data)


    }catch(error){
        console.error(`PUT request failed | ${error}`)
    }
}

setTimeout(() => {
    putRequest()
}, 5000)

//6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente.
async function patchRequest(){
    try{
        console.log("\n\tAsync/await - PATCH")

        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PATCH",
            headers: {
                "Content-Type":"application/json" 
            },
            body: JSON.stringify({title: "Patch operation | partially modified"})
        })

        if(!response.ok)
            throw new Error(`HTTP ${response.status}`)

        const data = await response.json()

        console.table(data)

    }catch(error){
        console.log(`PATCH request failed | ${error}`)

    }
}

setTimeout(() => {
    patchRequest()
}, 6000)

//7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta
async function deleteRequest(){
    try{
        console.log("\n\tAsync/await - DELETE")

        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE"
        })

        if(!response.ok)
            throw new Error(`HTTP ${response.status}`)

        console.log(response)

    }catch(error){
        console.log(`DELETE request failed | ${error}`)
    }
}

setTimeout(() => {
    deleteRequest()
}, 7000)

//8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap
async function getRequestWeather(city){
    
    const apikey = "1f2536dfb8ed9592a0579d939f90f475"
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`
    
    try{
        console.log("\n\t5 day weather forecast - Call 5 day / 3 hour forecast data - GET request")

        const response = await fetch(url)

        if(!response.ok)
            throw new Error(`HTTP ${response.status}`)

        const data = await response.json()

        console.log(data)

    }catch(error){
        console.error(`GET request failed | ${error}`)
    }
}

setTimeout(() => {
    getRequestWeather("London")
}, 11000)


//9. Utiliza la PokéAPI para obtener los datos de un pokemón concreto, a continuación los detalles de la especie y, finalmente, la cadena 
//   evolutiva a partir de la especie
async function pokemonData(name){
    try{
        console.log("\n\tPokemon GET request")

        if(!name)
            throw new Error("Pokemon name is required!")
        
        // fetching pokemon
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`) // fetching pokemon
        if(!response.ok)
            throw new Error(`HTTP ${response.status}`)
        const pokemonData = await response.json() // fetching pokemon info to json

        console.log(`Fetchin ${pokemonData.name}'s species details...`)
        console.log(pokemonData.species)

        // fetching species
        const speciesResponse = await fetch(`${pokemonData.species.url}`) // fetching species details
        if(!speciesResponse.ok)
            throw new Error(`HTTP ${speciesResponse.status}`)
        const speciesData = await speciesResponse.json() // fetching species details info to json
        
        console.log(`\nFetching ${pokemonData.name}'s evolution chain...`)
        console.log(speciesData.evolution_chain)
        
        // fetching evolution chain
        const evolutionChainResponse = await fetch(`${speciesData.evolution_chain.url}`) // fetching evolution chain
        if(!evolutionChainResponse.ok)
            throw new Error(`HTTP ${evolutionChainResponse.status}`)
        const evolutionChainData = await evolutionChainResponse.json() // fetching evolution chain to json

        console.log("\nFinal data:\n", {
            pokemon: pokemonData.name,
            species: speciesData.name,
            evolutionChain: evolutionChainData.chain
        })

    }catch(error){
        console.error(`GET request failed | ${error}`)
    }
} 

setTimeout(() => {
    pokemonData("lucario")
}, 14000)


//10. Utilza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API

//1. https://pro.openweathermap.org/data/2.5/forecast/hourly?q=Madrid&appid=cbe38dce18f12680384af37616b35c23: Throws 401 since this resource 
//   is intended for pro users hehe

//2. https://pokeapi.co/api/v2/pokemon-species/448/: Status is 200 OK and the information was visualized.

//3. https://pokeapi.co/api/v2/evolution-chain/232/: The same as the above, all of the requests were made by using Thunder Client.

