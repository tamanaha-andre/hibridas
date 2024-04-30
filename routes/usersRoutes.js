import express from "express"
import { getUsers, createUser, updateUser } from "../controllers/usersController.js"

const route = express.Router();

route.get("/", (req, res) => {
    let resultado = getUsers();
    resultado
        .then((users) =>{ res.status(200).json(users)})
        .catch((error) =>{ res.status(200).json(error)})
})

route.post("/", (req, res) => {
    let body = req.body;
    let resultado = createUser(body);
    resultado
        .then((user) => { res.status(201).json(user) })
        .catch((error) => { res.status(400).json(error) })
})

route.put("/:email", (req, res) => {
    let body = req.body;
    let resultado = updateUser(body, req.params.email);
    resultado
        .then((user) => { res.status(201).json(user) })
        .catch((error) => { res.status(400).json(error) })
})
 

export default route;
