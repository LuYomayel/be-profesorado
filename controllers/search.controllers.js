const { response } = require('express');
const { User, Product, Role, Categorie } = require('../models');
const {ObjectId} = require('mongoose').Types;

const coleccionesPermitidas = [
    'users',
    'categories',
    'products',
    'roles'
]

const buscarUsuario = async(termino= '', res = response)=>{

    const esMongoID = ObjectId.isValid(termino);
    if(esMongoID){
        const usuario = await User.findById(termino);
        res.json({
            results: (usuario) ? [usuario] : []
        });
    }

    const regex = new RegExp(termino, 'i')
    // const usuarios = await User.find({
    //     $or: [ {nombre:regex} , {email:regex} ],
    //     $and: [{estado:true}]
    // })

    const usuarios = await User.find({
        $or: [{name:regex}, {email:regex}],
        $and: [{estado:true}]
    });

    res.json({
        results: usuarios ? usuarios : []
    })
}


const buscarRoles = async(termino= '', res = response)=>{

    const esMongoID = ObjectId.isValid(termino);
    if(esMongoID){
        const roles = await Role.findById(termino);
        res.json({
            results: (roles) ? [roles] : []
        });
    }

    const regex = new RegExp(termino, 'i')

    const roles = await User.find({name:regex,estado:true});

    res.json({
        results: roles ? roles : []
    })
}

const buscarCategorias = async(termino= '', res = response)=>{

    const esMongoID = ObjectId.isValid(termino);
    if(esMongoID){
        const categoria = await Categorie.findById(termino);
        res.json({
            results: (categoria) ? [categoria] : []
        });
    }

    const regex = new RegExp(termino, 'i')
    
    const categorias = await Categorie.find({
        $and: [{name:regex},{estado:true}]
    });

    res.json({
        results: categorias ? categorias : []
    })
}

const buscarProducto = async(termino= '', res = response)=>{

    const esMongoID = ObjectId.isValid(termino);
    if(esMongoID){
        const producto = await Product.findById(termino).populate('categorie', 'name')
        res.json({
            results: (producto) ? [producto] : []
        });
    }

    const regex = new RegExp(termino, 'i')
    
    const productos = await Product.find({
        $and: [{name:regex},{estado:true}]
    }).populate('categorie', 'name')

    res.json({
        results: productos ? productos : []
    })
}

const buscar = (req, res = response) =>{

    const {coleccion, termino} = req.params

    if(!coleccionesPermitidas.includes(coleccion)){
        return res.status(400).json({
            msg: `Las colecciones permitidas son: ${coleccionesPermitidas}`
        })
    }

    switch(coleccion){
        case 'users':
            buscarUsuario(termino, res)
        break;
        case 'categories':
            buscarCategorias(termino, res)
        break;
        case 'products':
            buscarProducto(termino, res)
        break;
        case 'roles':
            buscarRoles(termino, res)
        break;
        default:
            res.status(500).json({
                msg: `Se le olvido hacer esta busqueda`
            })
            
        break;
    }
}

module.exports = {
    buscar
}