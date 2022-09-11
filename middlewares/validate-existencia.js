const { request, response } = require('express');
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const { validationResult } = require('express-validator')
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

const validateSubject = async(req = request, res = response, next) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(401).json(errors)
        }
        const connection = await controllersFunctions.newConnection();
        const sp = 'sp_getMateria';
        const paramsSP = `(${req.params.id})`
        const results = await controllersFunctions.query(connection, sp, paramsSP, true);
        
        if (results[0].length > 0) {
            // req.user = results[0]
        }
        else {
            return res.status(401).json({
                msg: 'La materia no existe'
            })
            
        }

        next();
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            msg:'La materia no existe'
        })
    }
}

const existSubject = async(req = request, res = response, next) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(401).json(errors)
        }
        
        const connection = await controllersFunctions.newConnection();
        const sp = 'sp_getMateriaSameNombre';
        const paramsSP = `('${req.body.nombreMateria}')`
        const results = await controllersFunctions.query(connection, sp, paramsSP, true);
        
        if (results[0].length > 0) {
            console.log('Validate',results[0])
            req.user = results[0];
        }
        else {
                        
        }

        next();
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            msg:'La materia no existe'
        })
    }
}

const validateCarreer = async(req = request, res = response, next) => {

    try {
        const connection = await controllersFunctions.newConnection();
        const sp = 'sp_getCarrera';
        const paramsSP = `(${req.params.id})`
        const results = await controllersFunctions.query(connection, sp, paramsSP, true);
        
        if (results[0].length > 0) {
            // req.user = results[0]
        }
        else {
            return res.status(401).json({
                msg: 'La carrera no existe'
            })
            
        }

        next();
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            msg:'La carrera no existe'
        })
    }
}

const existCarreer = async(req = request, res = response, next) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(401).json(errors)
        }
        
        const connection = await controllersFunctions.newConnection();
        const sp = 'sp_getCarreraSameNombre';
        const paramsSP = `('${req.body.nombreCarrera}')`
        const results = await controllersFunctions.query(connection, sp, paramsSP, true);
        
        if (results[0].length > 0) {
            console.log('Validate',results[0])
            req.user = results[0];
        }
        else {
                        
        }

        next();
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            msg:'La materia no existe'
        })
    }
}

module.exports= {
    validateStudent,
    validateProfessor,
    validateSubject,
    existSubject,
    existCarreer,
    validateCarreer
}