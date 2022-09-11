const { response } = require('express')

const bcrypt = require('bcryptjs')
const controllersFunctions = require('../controllers/controllers.functions')

const getAllSubjects = async()=> {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await controllersFunctions.newConnection();
            const sp = 'sp_getMaterias';
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

const getSubjectById = async(params)=> {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await controllersFunctions.newConnection();
            const sp = 'sp_getMateria';
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

const getSubjectByName = async(params)=> {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await controllersFunctions.newConnection();
            const sp = 'sp_getMateriaByNombre';
            const paramsSP = `('${params.nombreMateria}')`
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


const addSubject = async (body, req)=> {
    return new Promise(async (resolve, reject) => {
        try {
            
            if(req.user) reject('Ya existe esa materia')
            const connection = await controllersFunctions.newConnection();
            const sp = 'sp_addMateria';
            
            const paramsSP = `('${body.nombreMateria}')`;
            const results = await controllersFunctions.query(connection, sp, paramsSP, true);
            if(results.affectedRows > 0){
                resolve('OK')
            }else{
                reject('No se pudo agregar la materia')
            }


        } catch (err) {
            reject(err);
        }
    });
    
}

const putSubject = async (params, body)=> {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await controllersFunctions.newConnection();
            const sp = 'sp_putMateria';
            const paramsSP = `('${params.id}', '${body.nombreMateria}')`;
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



const deleteSubject = async (params)=> {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await controllersFunctions.newConnection();
            const sp = 'sp_deleteMateria';
            const paramsSP = `('${params.id}')`;
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
    getAllSubjects,
    getSubjectById,
    getSubjectByName,
    addSubject,
    putSubject,
    deleteSubject
}