const { Router } = require('express');
const { check } = require('express-validator');
// const { validarCampos } = require('../middlewares/validar-campos');
const studentFunctions = require('../controllers/student.controllers')


const router = Router();

router.get('/', (req, res)=>{
    studentFunctions.getStudent()
        .then( response => {
            res.status(200).send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
});

router.post('/', (req, res)=>{
    studentFunctions.addStudent()
        .then( response => {
            res.status(200).send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
});



module.exports = router;