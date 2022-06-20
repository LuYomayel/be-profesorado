const { request, response } = require('express');
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const validarJWT = async(req = request, res = response, next) => {
    const token = req.header('jwt-token');

    if(!token){
        return res.status(400).send({
            msg:'No hay token en la peticion'
        })
    }
    try {
        const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY)

        const user = await User.findById(uid);
        req.user = user;

        if( !user){
            return res.status(401).json({
                msg: 'Token no valido - usuario no existe'
            })
        }

        if(!user.estado){
            return res.status(401).json({
                msg: 'Token no valido - usuario con estado false'
            })
        }

        req.uid = uid;

        next();
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            msg:'Token no valido'
        })
    }
}

module.exports= {
    validarJWT
}