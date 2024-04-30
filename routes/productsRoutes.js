import express from "express"
import { getProducts, createProducts, updateProducts, desactivateProducts } from "../controllers/productsController.js";

const route = express.Router();

route.get("/", (req, res) => {
    let resultado = getProducts();
    resultado
        .then((users) => { res.status(200).json(users) })
        .catch((error) => { res.status(400).json(error) })
})

route.post("/:id", (req, res) => {
    let resultado = createProducts(req);
    resultado
        .then((user) => { res.status(201).json(user) })
        .catch((error) => { res.status(400).json(error) })
})

route.put("/:id", (req, res) => {
    let body = req.body;
    let resultado = updateProducts(req.params.id, body);
    resultado
        .then((user) => { res.status(201).json(user) })
        .catch((error) => { res.status(400).json(error) })
})

route.delete("/:id", (req, res) => {
    let body = req.body;
    let resultado = desactivateProducts(req.params.id, body);
    resultado
        .then((user) => { res.status(201).json(user) })
        .catch((error) => { res.status(400).json(error) })
})

export default route;