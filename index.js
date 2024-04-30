import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import usersRoutes from "./routes/usersRoutes.js"
import productsRoutes from "./routes/productsRoutes.js"


// ----> mongodb://127.0.0.1:27017

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Estoy conectado a la DB :)"))
    .catch(() => console.log("Hay un error al conectar a law db :("))


const app = express()  
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/users", usersRoutes)
app.use("/products", productsRoutes)

const port = process.env.PORT || 3000
app.listen(port)


//----------------//


/*
app.get('/',(req, res) => {
    console.log("works")
    res.send("home")
})

app.get('/about',auth,(req, res) => {
    console.log("works")
    res.send("about")
})

function logger(req, res, next){
    console.log('log:' + req.originalUrl)
    next()
}

// token ---> hibridas

function auth(req, res, next){
    console.log(req.query.token)
    if(req.query.token === 'hibridas'){
        next()
    } 
    else{
        res.send("Por favor autenticate")
    }
    
}
*/
