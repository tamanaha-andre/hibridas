import Products from "../models/productsModels.js"


//---> Todos los productos

async function getProducts(){
    let productsInStock = await Products.find()
    return productsInStock;
}


/*
async function getProducts(){
    let productsInStock = await Products.find({"status": true})
    .populate('autor', 'nombre mail -_id')
    return productsInStock;
}*/


//---> Creo un producto nuevo

async function createProducts(req){
    let productsNewIn = new Products({
        categoria: req.body.categoria,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        status: true,
        autor: req.params.id
        
    })
    return await productsNewIn.save();
}


//---> Modifico un producto

async function updateProducts(id, body){
    let productsUpdate = await Products.findByIdAndUpdate(id, {
        $set: {
            categoria: body.categoria,
            descripcion: body.descripcion
        }
    }, {new: true})
    return productsUpdate;
}


//---> Desactivamos un producto

async function desactivateProducts(id){
    let productsDesactivate = await Products.findByIdAndUpdate(id, {
        $set: {
            status: false
        }
    }, {new: true})
    return productsDesactivate;
}
 

export{ getProducts, 
        createProducts, 
        updateProducts, 
        desactivateProducts
};