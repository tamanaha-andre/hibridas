import mongoose  from "mongoose"


const usersShema = new mongoose.Schema ({
    nombre: {
        type: String,
        require: true
    },

    token:{
        type: String,
        require: true
    },

    email:{
        type: String,
        require: true
    },

    status:{
        type: Boolean,
        require: true
    },
    
    imagen:{
        type: String,
        require: false
    }



})

export default mongoose.model("users", usersShema)