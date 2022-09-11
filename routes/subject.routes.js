const { Router } = require('express');
const { userGet,userPost, userPut, userDelete, userGetById } = require('../controllers/user.controllers');
const { check } = require('express-validator');

const {validarCampos} = require('../middlewares')

const { validRole, existMail, existUser } = require('../helpers/db-validators');
const subjectFunctions = require('../controllers/subjects.controllers');
const { validateSubject, existSubject } = require('../middlewares/validate-existencia');

const router = Router();

router.get('/', (req, res)=>{
    subjectFunctions.getAllSubjects()
        .then( response => {
            res.status(200).send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
})
router.get('/:id', (req, res)=>{
    subjectFunctions.getSubjectById(req.params)
        .then( response => {
            res.status(200).send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
})

router.get('/name/:nombreMateria', (req, res)=>{
    subjectFunctions.getSubjectByName(req.params)
        .then( response => {
            res.status(200).send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
})

router.post('/',[
    check('nombreMateria', 'Campo "nombreMateria" obligatorio').not().isEmpty(),
    existSubject,
    validarCampos,
], (req, res)=>{
    subjectFunctions.addSubject(req.body, req)
        .then( response => {
            res.status(200).send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
})

router.put('/:id',[
    check('nombreMateria', 'Campo "nombreMateria" obligatorio').not().isEmpty(),
    validateSubject,
    validarCampos,
], (req, res)=>{
    subjectFunctions.putSubject(req.params, req.body)
        .then( response => {
            res.status(200).send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
})

router.delete('/:id',[
    validateSubject,
    validarCampos,
],(req, res)=>{
    subjectFunctions.deleteSubject(req.params)
        .then( response => {
            res.status(200).send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
})

module.exports = router;