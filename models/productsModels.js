import mongoose  from "mongoose";
const Schema = mongoose.Schema;

const vendedorShema = new mongoose.Schema({
    nombre: String   
})

const productsShema = new mongoose.Schema ({
    
    categoria: {
        type: String,
        required: true
    },

    descripcion:{
        type: String,
        required: false
    },

    status:{
        type: Boolean,
        required: true
    },

    vendedor: [vendedorShema] 
    ,

    color:{
        type: Array,
        required: true
    },

    imagen:{
        type: String,
        required: false
    }

})

export default mongoose.model('products', productsShema)