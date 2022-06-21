const Role = require('../models/roles')
const User = require('../models/user')

const validRole = async(role = '') =>{
    const existeRole = await Role.findOne({role})
    console.log(existeRole)
    if(!existeRole){
        throw new Error('El rol no existe')
    }
}

const existMail = async(email = '') => {
    const existeEmail = await User.findOne({email})
    if(existeEmail){
        throw new Error('El correo ya esta registrado')
    }
    
}

const existUser = async(id ) => {
    const exiseUsuario = await User.findById(id)
    if(!exiseUsuario){
        throw new Error('El id no existe')
    }
    
}

module.exports = {
    validRole,
    existMail,
    existUser
}