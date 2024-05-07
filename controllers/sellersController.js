import Usuario from "../models/sellersModels.js"
import bcript from "bcrypt"



async function getUsers(){
    let usuarios = await Usuario.find();
    return usuarios;
}


//---> Vendedores filtrados por los que estan activos

async function getActive(){
    let sellersActive = await Usuario.find({status: 'true'})  
    return sellersActive;
}


async function createUser(body){
    let user = new Usuario({
         nombre: body.nombre,
         //token: body.token,
         token: bcript.hashSync(body.token, 10),
         email: body.email,
         status: true
    })
    return await user.save();
}

async function updateUser(body, email){
    console.log(body)
    console.log(email)
    let user = await Usuario.updateOne({"email":email}, {
        $set:{
        nombre: body.nombre,
        token: body.token
       }
   })
    
    return user;
}



export{getUsers , getActive, createUser , updateUser} 