import mongoose  from "mongoose";
const Schema = mongoose.Schema;

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

    autor: {
        type: Schema.Types.ObjectId, ref: 'users'
    },

    
    imagen:{
        type: String,
        required: false
    }

})

export default mongoose.model('products', productsShema)