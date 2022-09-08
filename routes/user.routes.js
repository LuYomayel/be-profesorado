const { Router } = require('express');
const { userGet,userPost, userPut, userDelete, userGetById } = require('../controllers/user.controllers');
const { check } = require('express-validator');

const {validarCampos, validarJWT, hasRole, isAdminRole} = require('../middlewares')

const { validRole, existMail, existUser } = require('../helpers/db-validators');
const userFunctions = require('../controllers/user.controllers')

const router = Router();

router.get('/', (req, res)=>{
    userFunctions.userGet()
        .then( response => {
            res.status(200).send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
})
router.get('/:id', (req, res)=>{
    userFunctions.userGetById(req.params)
        .then( response => {
            res.status(200).send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
})

router.put('/:id', (req, res)=>{
    userFunctions.userPut(req.params)
        .then( response => {
            res.status(200).send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
})


module.exports = router;