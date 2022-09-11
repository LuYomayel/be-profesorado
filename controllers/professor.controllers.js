const {response} = require('express')
// const { Student } = require('../models')
const { config } = require ('../database/config')
const controllersFunctions = require('./controllers.functions')
const faker = require('@faker-js/faker')
const { options } = require('moongose/routes')
const bcrypt = require('bcryptjs')
const getAllProfessors = async()=>{
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await controllersFunctions.newConnection();
            const sp = 'sp_getProfesores';
            const paramsSP = `()`
            const results = await controllersFunctions.query(connection, sp, paramsSP, true);
            if (results.length > 0) {
                resolve(results[0]);
            }
            else {
                reject('Error: No se encontraron registros');
            }

        } catch (err) {
            reject(err);
        }
    });
    
}

const getProfessor = async(params)=>{
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await controllersFunctions.newConnection();
            const sp = 'sp_getProfesor';
            // resolve(params.id)
            const paramsSP = `(${params.id})`
            const results = await controllersFunctions.query(connection, sp, paramsSP, true);
            if (results.length > 0) {
                resolve(results[0]);
            }
            else {
                reject('Error: No se encontraron registros');
            }

        } catch (err) {
            reject(err);
        }
    });
    
}

const addProfessor = async(body)=>{
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await controllersFunctions.newConnection();
            const sp = 'sp_addProfesor';
            const nombre = body.nombre;
            const apellido = body.apellido;
            const fechaNac = new Date(body.fechaNac);
            const direccion = body.direccion;
            const telefono = body.telefono;
            const documento = body.dni;

            const email = body.email;
            const salt = bcrypt.genSaltSync();
            const contraseña = bcrypt.hashSync( documento, salt);
            
            
            const paramsSP = `('${nombre}', '${apellido}', '${documento}', '${telefono}', '${direccion}', '${fechaNac.toISOString().split('T')[0]}', '${email}', '${contraseña}')`
            const results = await controllersFunctions.query(connection, sp, paramsSP, true);
            console.log(documento)
            if(results.affectedRows > 0){
                resolve('OK')
            }else{
                reject('No se pudieron realizar los cambios solicitados')
            }

        } catch (err) {
            reject(err);
        }
    });
    
}

const putProfessor = async(params, body,req)=>{
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await controllersFunctions.newConnection();
            const sp = 'sp_putProfesor';

            const alumno = req.user[0];

            let nombre = alumno.nombre;
            if(body.nombre) nombre = body.nombre;
            let apellido = alumno.apellido;
            if(body.apellido) apellido = body.apellido;
            let dni = alumno.dni;
            console.log(alumno)
            if(body.dni) dni = body.dni;
            let telefono = alumno.telefono;
            if(body.telefono)telefono = body.telefono;
            let direccion = alumno.direccion;
            if(body.direccion) direccion = body.direccion;
            let fechaNac = alumno.fechaNac;
            if(body.fechaNac) {
                let date = new Date(body.fechaNac);
                fechaNac = date;
            }
           
            
            const paramsSP = `(${params.id},'${nombre}', '${apellido}', '${dni}', '${telefono}', '${direccion}', '${fechaNac.toISOString().split('T')[0]}')`
            const results = await controllersFunctions.query(connection, sp, paramsSP, true);
            if(results.affectedRows > 0){
                resolve('OK')
            }else{
                reject('No se pudieron realizar los cambios solicitados')
            }
            // resolve('OK')


        } catch (err) {
            reject(err);
        }
    });
    
}

const deleteProfessor = async(params)=>{
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await controllersFunctions.newConnection();
            const sp = 'sp_deleteProfesor';
            // resolve(params.id)
            const paramsSP = `(${params.id})`
            const results = await controllersFunctions.query(connection, sp, paramsSP, true);
            if(results.affectedRows > 0){
                resolve('OK')
            }else{
                reject('No se pudieron realizar los cambios solicitados')
            }

        } catch (err) {
            reject(err);
        }
    });
    
}

module.exports = {
    getProfessor,
    addProfessor,
    getAllProfessors,
    putProfessor,
    deleteProfessor
}