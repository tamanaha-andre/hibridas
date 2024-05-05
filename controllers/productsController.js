import Products from "../models/productsModels.js"

//---> Todos los productos----> OK

async function getProducts(){
    let productsInStock = await Products.find()
    return productsInStock;
}

//---> Productos  filtrados por los que estan en los que estan en Stock ---> OK ------>ver de meter vendedor


async function ProductsAsset(){
    let productsActive = await Products.find({status: 'true'})
    .populate('autor', 'nombre')
    return productsActive;
}



//---> Creo un producto nuevo ---> OK 

async function createProducts(req){
    let productsNewIn = new Products({
        categoria: req.body.categoria,
        precio: req.body.precio,
        status: true,
        descripcion: req.body.descripcion,
        color: req.body.color,
        autor : {
            nombre: req.body.autornombre
        }         
    })
    return await productsNewIn.save();
}


//---> Modifico un producto ----> OK

async function updateProducts(id, body){
    let productsUpdate = await Products.findByIdAndUpdate(id, {
        $set: {
            categoria: body.categoria,
            precio: body.precio,
            status: body.status,
            descripcion: body.descripcion,
            color: body.color
        }
    }, {new: true})
    return productsUpdate;
}


//---> Desactivamos un producto ---> OK

async function desactivateProducts(id){
    let productsDesactivate = await Products.findByIdAndUpdate(id, {
        $set: {
            status: false
        }
    }, {new: true})
    return productsDesactivate;
}
 

export{getProducts, ProductsAsset, createProducts, updateProducts, desactivateProducts };