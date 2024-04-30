import Usuario from "../models/usersModels.js"



async function getUsers(){
    let usuarios = await Usuario.find();
    return usuarios;
}

async function createUser(body){
    let user = new Usuario({
         nombre: body.nombre,
         token: body.token,
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



export{getUsers , createUser , updateUser} 