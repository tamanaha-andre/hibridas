import express from "express"
import { getUsers } from "../controllers/usersController.js"

const route = express.Router();

route.get("/", (req, res) => {
    let resultado = getUsers();
    resultado
        .then((users) =>{ res.status(200).json(users)})
        .catch((error) =>{ res.status(200).json(error)})
})

export default route;

