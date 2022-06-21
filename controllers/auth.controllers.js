const { response } = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs')
const { generarJWT } = require('../helpers/generar-JWT');
const { googleVerify } = require('../helpers/google-verify');

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

const googleSignIn = async(req, res = response)=>{
    const {id_token} = req.body;

    try {

        const { name, img, email } = await googleVerify(id_token);

        let user = await User.findOne({email})
        console.log(user)
        if(!user){
            const data = {
                name, 
                email, 
                password: 'xd',
                img,
                google:true,
                role: 'USER_ROLE'
            };

            user = new User(data);
            await user.save();
        }

        if(!user.estado){
            return res.status(401).json({
                msg: 'Hable con el administrador, usuario bloqueado'
            });
        }

        const token = await generarJWT( user.id );

        res.json({
            user,token
        })



    } catch (error) {
        console.log(error);
        return res.json({
            msg: 'El token no se pudo verificar'
        });
    }

    
}

module.exports= {
    login,
    googleSignIn
}