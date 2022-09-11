const { response } = require('express')

const controllersFunctions = require('../controllers/controllers.functions')

const getAllCarreers = async()=> {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await controllersFunctions.newConnection();
            const sp = 'sp_getCarreras';
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

const getCarreerById = async(params)=> {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await controllersFunctions.newConnection();
            const sp = 'sp_getCarrera';
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

const getCarreerByName = async(params)=> {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await controllersFunctions.newConnection();
            const sp = 'sp_getCarreraByNombre';
            const paramsSP = `('${params.nombreCarrera}')`
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


const addCarreer = async (body, req)=> {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(req.user)
            if(req.user) reject('Ya existe esa carrera')
            const connection = await controllersFunctions.newConnection();
            const sp = 'sp_addCarrera';
            const paramsSP = `('${body.nombreCarrera}')`;
            const results = await controllersFunctions.query(connection, sp, paramsSP, true);
            if(results.affectedRows > 0){
                resolve('OK')
            }else{
                reject('No se pudo agregar la carrera')
            }


        } catch (err) {
            reject(err);
        }
    });
    
}

const putCarreer = async (params, body)=> {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await controllersFunctions.newConnection();
            const sp = 'sp_putCarrera';
            const paramsSP = `('${params.id}', '${body.nombreCarrera}')`;
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



const deleteCarreer = async (params)=> {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await controllersFunctions.newConnection();
            const sp = 'sp_deleteCarrera';
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
    getAllCarreers,
    getCarreerById,
    getCarreerByName,
    addCarreer,
    putCarreer,
    deleteCarreer
}