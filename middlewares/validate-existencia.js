const { request, response } = require('express');
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const controllersFunctions = require('../controllers/controllers.functions')

const validateStudent = async(req = request, res = response, next) => {

    
    try {
        const connection = await controllersFunctions.newConnection();
        const sp = 'sp_getAlumno';
        const paramsSP = `(${req.params.id})`
        const results = await controllersFunctions.query(connection, sp, paramsSP, true);
        
        if (results[0].length > 0) {
            req.user = results[0]
        }
        else {
            return res.status(401).json({
                msg: 'El alumno no existe'
            })
            
        }

        next();
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            msg:'Alumno no existente'
        })
    }
}

const validateProfessor = async(req = request, res = response, next) => {

    
    try {
        const connection = await controllersFunctions.newConnection();
        const sp = 'sp_getProfesor';
        const paramsSP = `(${req.params.id})`
        const results = await controllersFunctions.query(connection, sp, paramsSP, true);
        
        if (results[0].length > 0) {
            req.user = results[0]
        }
        else {
            return res.status(401).json({
                msg: 'El profesor no existe'
            })
            
        }

        next();
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            msg:'Profesor no existente'
        })
    }
}

module.exports= {
    validateStudent,
    validateProfessor
}