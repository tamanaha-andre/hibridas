import Products from "../models/productsModels.js"

//---> Todos los productos ----> OK

async function getProducts(){
    let productsInStock = await Products.find()
    return productsInStock;
}

//---> Productos filtrados por los que estan en los que estan en Stock

async function productsAsset(){
    let productsActive = await Products.find({status: 'true'})
    .populate('vendedor', 'nombre')
    return productsActive;
}

//---> Productos ordenados por Id (nuestra intencion era ordenarlo alfabeticamente)

async function productsOrder(){
const sort = { _id: -1 };
const cursor = Products.find(categoria).sort(sort);
for await (const doc of cursor) {
        return doc;
    }
}




//---> Creo un producto nuevo y cargo quien es el vendedor que cargo el registro

async function createProducts(req){
    let productsNewIn = new Products({
        categoria: req.body.categoria,
        precio: req.body.precio,
        status: true,
        descripcion: req.body.descripcion,
        color: req.body.color,
        vendedor : {
            nombre: req.body.vendedornombre,
            email: req.body.vendedoremail   
        }        
    })
    return await productsNewIn.save();
}


//---> Modifico un producto 

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


//---> Desactivamos un producto 

async function desactivateProducts(id){
    let productsDesactivate = await Products.findByIdAndUpdate(id, {
        $set: {
            status: false
        }
    }, {new: true})
    return productsDesactivate;
}
 

export{getProducts, productsAsset, productsOrder, createProducts, updateProducts, desactivateProducts };