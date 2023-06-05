const { Router } = require('express');

const studentFunctions = require('../controllers/student.controllers');

const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { existStudent } = require('../helpers/db-validators');
const { validateStudent } = require('../middlewares/validate-existencia');

const router = Router();

// Devuelve todos los alumnos
router.get('/', (req, res)=>{
    studentFunctions.getAllStudents()
        .then( response => {
            res.status(200).send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
});

// Devuelve un alumno por id
router.get('/:id',[
    check('id', 'Debe completar el id').not().isEmpty(),
    validarCampos
], (req, res)=>{
    studentFunctions.getStudent(req.params)
        .then( response => {
            res.status(200).send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
});

// Agrega un alumno
router.post('/', [
    check('nombre', 'Debe completar el nombre').not().isEmpty(),
    check('apellido', 'Debe completar el apellido').not().isEmpty(),
    check('direccion', 'Debe completar el direccion').not().isEmpty(),
    check('telefono', 'Debe completar el telefono').not().isEmpty(),
    check('email', 'Debe completar el email').not().isEmpty(),
    check('email', 'El correo es invalido').isEmail(),
    check('fechaNac', 'Debe completar la fecha de nacimiento').not().isEmpty(),
    check('fechaNac', 'Fecha de nacimiento inválida').isDate(),
    check('dni', 'Debe completar el documento').not().isEmpty(),
    check('dni', 'Documento inválido').isIdentityCard('ar-TN'),
    // check('id').custom(existStudent),
    validarCampos
],  (req, res)=>{
    studentFunctions.addStudent(req.body)
        .then( response => {
            res.status(200).send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
});

// Agrega un alumno
router.put('/:id',[
    check('id', 'Debe completar el id').not().isEmpty(),
    validateStudent,
    // check('id').custom(existStudent),
    validarCampos
], (req, res)=>{
    studentFunctions.putStudent(req.params, req.body,req)
        .then( response => {
            res.status(200).send({response})
        })
        .catch(err=>{
            res.status(500).send(err)
        })
});

router.delete('/:id',[
    check('id', 'Debe completar el id').not().isEmpty(),
    validateStudent,
    // check('id').custom(existStudent),
    validarCampos
], (req, res)=>{
    studentFunctions.deleteStudent(req.params)
        .then( response => {
            res.status(200).send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
});



module.exports = router;