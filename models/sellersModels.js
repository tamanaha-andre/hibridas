import mongoose  from "mongoose"


const sellersShema = new mongoose.Schema ({

    nombre: {
        type: String,
        required: true
    },

    token:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    status:{
        type: Boolean,
        required: true
    },
    
  
    imagen:{
        type: String,
        required: false
    }

})

export default mongoose.model("sellers", sellersShema)