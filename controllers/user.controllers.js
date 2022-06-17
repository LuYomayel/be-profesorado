const { response } = require('express')

const userGet = (req, res = response)=> {
    const hola = req.query
    res.json({
        msg: 'get API',
        hola
    })
}

const userPost = (req, res = response)=> {
    res.json({
        msg: 'post API',
        nombre: req.body.nombre,
        edad: req.body.edad
    })
}

const userPut= (req, res = response)=> {
    res.json({
        msg: 'put API'
    })
}

const userDelete = (req, res = response)=> {
    const params = req.params;
    res.json({
        msg: 'delete API',
        params
    })
}


module.exports = {
    userGet,
    userDelete,
    userPost,
    userPut
}