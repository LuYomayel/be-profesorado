const { Router } = require('express');
const { userGet,userPost, userPut, userDelete, userGetById } = require('../controllers/user.controllers');
const { check } = require('express-validator');

const {validarCampos} = require('../middlewares')

const { validRole, existMail, existUser } = require('../helpers/db-validators');
const carreerFunctions = require('../controllers/carreers.controllers');
const { validateCarreer, existCarreer } = require('../middlewares/validate-existencia');

const router = Router();

router.get('/', (req, res)=>{
    carreerFunctions.getAllCarreers()
        .then( response => {
            res.status(200).send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
})
router.get('/:id', (req, res)=>{
    carreerFunctions.getCarreerById(req.params)
        .then( response => {
            res.status(200).send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
})

router.get('/name/:nombreCarrera', (req, res)=>{
    carreerFunctions.getCarreerByName(req.params)
        .then( response => {
            res.status(200).send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
})

router.post('/',[
    check('nombreCarrera', 'Campo "nombreCarrera" obligatorio').not().isEmpty(),
    existCarreer,
    validarCampos,
], (req, res)=>{
    carreerFunctions.addCarreer(req.body, req)
        .then( response => {
            res.status(200).send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
})

router.put('/:id',[
    check('nombreCarrera', 'Campo "nombreCarrera" obligatorio').not().isEmpty(),
    validateCarreer,
    validarCampos,
], (req, res)=>{
    carreerFunctions.putCarreer(req.params, req.body)
        .then( response => {
            res.status(200).send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
})

router.delete('/:id',[
    validateCarreer,
    validarCampos,
],(req, res)=>{
    carreerFunctions.deleteCarreer(req.params)
        .then( response => {
            res.status(200).send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
})

module.exports = router;