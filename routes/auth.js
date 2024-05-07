import Usuario from "../models/sellersModels.js"
import bcrypt from "bcrypt"
import express from "express"
import jwt from "jsonwebtoken"
import "dotenv/config"

const route = express.Router()

route.post('/', (req, res) => {
    Usuario.findOne({email: req.body.email})
    .then(data => {
        if(data){
            const tokenValido = bcrypt.compareSync(req.body.token, data.token)
            if(!tokenValido) return res.status(400).json({msj: "token incorrecto"})
            const jwToken = jwt.sign({
                usuario: {
                    _id: data._id,
                    nombre: data.nombre,
                    email: data.email
                }
            }, process.env.SEED, {expiresIn: process.env.EXPIRATION})
            res.json({
                usuario: {
                    _id: data._id,
                    nombre: data.nombre,
                    email: data.email
                }, jwToken
            })
        }else{
            res.status(400).json({msj: "email incorrecto"})
        }
    })
})

export default route;