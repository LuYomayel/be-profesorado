const { response } = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')


const userGet = async(req, res = response)=> {
    const { limit = 5, since = 0 } = req.query;
    const query = {estado:true}
    // const users = await User.find(query)
    //     .limit(Number(limit))
    //     .skip(Number(since))

    // const total = await User.countDocuments(query);

    const [ total, users] = await Promise.all([
        User.countDocuments(query),
        User.find(query)
        .limit(Number(limit))
        .skip(Number(since))
    ])

    res.json({
        total,
        users
    })
}

const userGetById = async(req, res = response)=> {
    console.log(req.params.id)
    const user = await User.findById(req.params.id)
    res.json({
        user
    })
    // console.log(user)
}

const userPost = async (req, res = response)=> {

    

    const {name, email, password, role} = new User(req.body);
    const user = new User({name, email, password, role})

    // Verificar el correo
    

    // Encriptar la contraseña
    const salt = bcrypt.genSaltSync(); // Por defecto en 10
    user.password = bcrypt.hashSync( password, salt );

    await user.save();
    res.json({
        user
    })
}

const userPut= async(req, res = response)=> {
    const { id } = req.params;
    const { _id, password, google,email, ...resto} = req.body;

    //TODO Validar contra BBDD
    if(password){
        const salt = bcrypt.genSaltSync(); // Por defecto en 10
        resto.password = bcrypt.hashSync( password, salt );
    }

    const user  = await User.findByIdAndUpdate(id, resto)

    res.json({
        user
    })
}

const userDelete = async (req, res = response)=> {
    const {id} = req.params;

    const user = await  User.findByIdAndUpdate(id, {estado: false})
    const userAuth = req.user

    res.json({
        user, userAuth
    })
}


module.exports = {
    userGet,
    userDelete,
    userPost,
    userPut,
    userGetById
}