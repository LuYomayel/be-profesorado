const { Router } = require('express');

const professorFunctions = require('../controllers/professor.controllers');

const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { existStudent } = require('../helpers/db-validators');
const { validateProfessor } = require('../middlewares/validate-existencia');

const router = Router();

// Devuelve todos los profesores
router.get('/', (req, res)=>{
    professorFunctions.getAllProfessors()
        .then( response => {
            res.status(200).send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
});

// Devuelve un profesor por id
router.get('/:id', (req, res)=>{
    professorFunctions.getProfessor(req.params)
        .then( response => {
            res.status(200).send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
});

// Agrega un profesor
router.post('/', (req, res)=>{
    professorFunctions.addProfessor()
        .then( response => {
            res.status(200).send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
});

// Agrega un profesor
router.put('/:id',[
    validateProfessor,
    // check('id').custom(existStudent),
    validarCampos
], (req, res)=>{
    professorFunctions.putProfessor(req.params, req.body,req)
        .then( response => {
            res.status(200).send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
});



module.exports = router;