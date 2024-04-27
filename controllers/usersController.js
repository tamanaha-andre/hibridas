import Usuario from "../models/usersModels.js"



async function getUsers(){
    let usuarios = await Usuario.find();
    return usuarios;
}

export{getUsers}