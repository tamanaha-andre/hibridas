import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import sellersRoutes from "./routes/sellersRoutes.js"
import productsRoutes from "./routes/productsRoutes.js"
import auth from "./routes/auth.js"

// ----> mongodb://127.0.0.1:27017

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Estoy conectado a la DB :)"))
    .catch(() => console.log("Hay un error al conectar a law db :("))


const app = express()  
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/sellers", sellersRoutes)
app.use("/products", productsRoutes)
app.use("/login", auth)

const port = process.env.PORT || 3000
app.listen(port)

