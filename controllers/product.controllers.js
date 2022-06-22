const {response} = require('express')
const { Product } = require('../models')

const obtenerProductos = async(req,res=response)=>{
    const { limit = 5, since = 0 } = req.query;
    const query = {estado:true};

    const [ total, products] = await Promise.all([
        Product.countDocuments(query),
        Product.find(query).populate('categorie', 'name').populate('user', 'name')
        .limit(Number(limit))
        .skip(Number(since))
    ])

    res.json({
        total,
        products
    })

    
}

const obtenerProducto = async(req,res=response)=>{
    
    const id = req.params.id;

    const product = await Product.findById({_id: id}).populate('categorie', 'name').populate('user', 'name')

    res.json({
        product
    })
}


const crearProducto = async(req, res = response) => {
    
    const {estado, user, ...body} = req.body;
    
    const productDB = await Product.findOne({name: body.name})
    console.log(productDB)
    if( productDB ){
        return res.status(400).json({
            msg:`El producto ${productDB.name} ya existe`
        })
    }
    
    const data = {
        ...body,
        name: body.name.toUpperCase(),
        user : req.user._id
    }
    
    const product = new Product(data);
    await product.save();
    
    res.status(201).json(product)
    
}


const actualizarProducto = async(req,res=response)=>{
    
    const {id} = req.params;
    const {estado, user, ...data} = req.body;
    if(data.nombre) data.name = data.name.toUpperCase();
    data.user = req.user._id;
    
    const product = await Product.findByIdAndUpdate(id,data, {new:true})
    
    res.status(201).json(product)
}

const borrarProducto = async(req,res=response)=>{
    
    const id = req.params.id;

    const product = await Product.findByIdAndUpdate(id,{estado:false})


    res.json({
        product
    })

}

module.exports = {
    crearProducto,
    obtenerProducto,
    obtenerProductos,
    actualizarProducto,
    borrarProducto
}