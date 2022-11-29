const express= require("express")
const cors = require ("cors")


const app= express()
app.use(cors())

app.get("/movies",(req,res)=>{
   const data=[
    {
        name: "Dangal",
        rating: 5,
        release: 2016
    },
    {
        name: "Drishyam 2",
        rating: 4.5,
        release: 2022
    }, {
        name: "Thor: Love and Thunder",
        rating: 5,
        release: 2022
    },
    {
        name: "PK",
        rating: 4,
        release: 2014
    },
    {
        name: "3 Idiots",
        rating: 4,
        release: 2008
    },
    {
        name: "KGF",
        rating: 5,
        release: 2020
    },
    {
        name: "Enola Holmes",
        rating: 3.5,
        release: 2022
    },
    {
        name: "Deadpool",
        rating: 3,
        release: 2015
    },
    {
        name: "Sita-Rammam",
        rating: 4,
        release: 2022
    },
    {
        name: "Love Aaj Kal",
        rating: 2.5,
        release: 2014
    },
    {
        name: "Ghajini",
        rating: 2,
        release: 2006
    },
    {
        name: "Aparichit",
        rating: 4,
        release: 2012
    },
    {
        name: "Kantara",
        rating: 5,
        release: 2022
    },
    {
        name: "Wanted",
        rating: 4.5,
        release: 2011
    },
    {
        name: "Sultan",
        rating: 4,
        release: 2015
    },
    {
        name: "Darlings",
        rating: 5,
        release: 2016
    },
    {
        name: "Fast and Furious 2",
        rating: 4.5,
        release: 2022
    }, {
        name: "Conjuring",
        rating: 5,
        release: 2008
    },
    {
        name: "Avengers: The End Game",
        rating: 4,
        release: 2020
    },
    {
        name: "3 Idiots",
        rating: 4,
        release: 2008
    },
    {
        name: "Pushpa: The Rise",
        rating: 5,
        release: 2020
    },
    {
        name: "Jumanji",
        rating: 3.5,
        release: 1996
    },
    {
        name: "The Hobbit",
        rating: 3,
        release: 2015
    },
    {
        name: "The Power of Ring",
        rating: 4,
        release: 2022
    },
    {
        name: "The Bullet Train",
        rating: 4,
        release: 2022
    },
    {
        name: "Yeh Jawani Yeh Diwani",
        rating: 5,
        release: 2014
    },
    {
        name: "Now You See Me",
        rating: 4,
        release: 2018
    },
   ]
   res.send(data)
}) 

const server= app.listen(8080,()=>{
console.log("server is running up- port 8080")
})