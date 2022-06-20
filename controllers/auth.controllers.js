const { response } = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs')
const { generarJWT } = require('../helpers/generar-JWT')

const login = async(req, res = response) => {
    const { email, password} = req.body;

    try {

        const usuario = await User.findOne({email});
        if( !usuario){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos'
            })
        }
        if( !usuario.estado){
            return res.status(400).json({
                msg: 'Usuario de baja'
            })
        }

        const validPassword = bcrypt.compareSync( password, usuario.password )
        if(!validPassword){
            return res.status(400).json({
                msg: 'Contraseña incorrecta'
            })
        }

        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token
        })

    } catch (error) {
        console.log(error);
        return res.json({
            msg: 'Hable con el administrador'
        });
    }

    
}

module.exports= {
    login
}