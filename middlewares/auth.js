import jwt from "jsonwebtoken"
import "dotenv/config"

let verificarToken = (req, res, next) => {
    let token = req.get('auth');
    jwt.verify(token, process.env.SEED, (error, decoded) => {
        if(error){
            res.status(400).json("Ohoh! No te olvides autenticarte")
        }
        req.usuario = decoded.usuario;
        next()
    })
}

export default verificarToken;  