const { response} = require('express')
const path = require('path')
const {v4: uuidv4} = require('uuid');
const { subirArchivos } = require('../helpers');

const cargarArchivo = async (req, res=response)=>{

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
        res.status(400).json({msg:'No files were uploaded.'});
        return;
    }

    const pathCompleto = await subirArchivos(req.files);

    res.json({
        path: pathCompleto
    })
    
}

module.exports = {
    cargarArchivo
}