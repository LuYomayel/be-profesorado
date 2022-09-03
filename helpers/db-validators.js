const { Categorie, Product } = require('../models')
const Role = require('../models/roles')
const User = require('../models/user')
const controllersFunctions = require('../controllers/controllers.functions')

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

const existCategorie = async(id ) => {
    const exiseCategoria = await Categorie.findById(id)
    if(!exiseCategoria){
        throw new Error('La categoria no existe')
    }
    
}

const existProduct = async(id ) => {
    const exiseCategoria = await Product.findById(id)
    if(!exiseCategoria){
        throw new Error('El producto no existe')
    }
    
}

const existStudent = async(id, req) => {
    const connection = await controllersFunctions.newConnection();
    const sp = 'sp_getAlumno';
    const paramsSP = `(${id})`
    const results = await controllersFunctions.query(connection, sp, paramsSP, true);
    
    if (results[0].length > 0) {
        req.body = results[0]
    }
    else {
        throw new Error('El alumno no existe')
    }
}

module.exports = {
    validRole,
    existMail,
    existUser,
    existCategorie,
    existProduct,
    existStudent
}