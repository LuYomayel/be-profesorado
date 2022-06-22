const {response} = require('express')
const { Categorie } = require('../models')

const obtenerCategorias = async(req,res=response)=>{
    const { limit = 5, since = 0 } = req.query;
    const query = {estado:true};

    const [ total, categories] = await Promise.all([
        Categorie.countDocuments(query),
        Categorie.find(query).populate('user', 'name')
        .limit(Number(limit))
        .skip(Number(since))
    ])

    res.json({
        total,
        categories
    })

    
}

const obtenerCategoria = async(req,res=response)=>{
    
    const id = req.params.id;

    const categorie = await Categorie.findById({_id: id}).populate('user', 'name')

    res.json({
        categorie
    })
}


const crearCategoria = async(req, res = response) => {
    
    const name = req.body.name.toUpperCase();
    
    const categoriaDB = await Categorie.findOne({name})
    
    if( categoriaDB ){
        return res.status(400).json({
            msg:`La categoria ${categoriaDB.name} ya existe`
        })
    }
    
    const data = {
        name,
        user : req.user._id
    }
    
    const categoria = new Categorie(data);
    await categoria.save();
    
    res.status(201).json(categoria)
    
}


const actualizarCategoria = async(req,res=response)=>{
    
    const {id} = req.params;
    const {estado, user, ...data} = req.body;
    data.name = data.name.toUpperCase();
    data.user = req.user._id;
    
    const categoria = await Categorie.findByIdAndUpdate(id,data, {new:true})
    
    res.status(201).json(categoria)
}

const borrarCategoria = async(req,res=response)=>{
    
    const id = req.params.id;

    const categorie = await Categorie.findByIdAndUpdate(id,{estado:false})


    res.json({
        categorie
    })

}

module.exports = {
    crearCategoria,
    obtenerCategorias,
    obtenerCategoria,
    actualizarCategoria,
    borrarCategoria
}