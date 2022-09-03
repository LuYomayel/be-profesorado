const {response} = require('express')
// const { Student } = require('../models')
const { config } = require ('../database/config')
const controllersFunctions = require('../controllers/controllers.functions')
const faker = require('@faker-js/faker')
const { options } = require('moongose/routes')

const getStudent = async(req,res=response)=>{
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await controllersFunctions.newConnection();
            const sp = 'sp_getAlumnos';
            const paramsSP = `()`
            const results = await controllersFunctions.query(connection, sp, paramsSP, true);
            if (results.length > 0) {
                resolve(results);
            }
            else {
                reject('Error: No se encontraron registros');
            }

        } catch (err) {
            reject(err);
        }
    });
    
}

const addStudent = async(req,res=response)=>{
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await controllersFunctions.newConnection();
            const sp = 'sp_addAlumno';
            const randomName = faker.faker.name.fullName().split(' ')[0];
            const randomLastName = faker.faker.name.fullName().split(' ')[1];
            const randmonBirth = faker.faker.date.between('1970-01-01T00:00:00.000Z', '2000-01-01T00:00:00.000Z')
            const randomAdress = faker.faker.address.secondaryAddress() // => "Suite 578"
            const randomPhone = faker.faker.phone.number('11########') // '501-039-841'
            const randomDocument = faker.faker.phone.number('########') // '501-039-841'
            // resolve(`(${randomName}, ${randomLastName}, ${randomDocument}, ${randomPhone}, ${randomAdress}, ${randmonBirth.toISOString().split('T')[0]})`)
            const paramsSP = `('${randomName}', '${randomLastName}', '${randomDocument}', '${randomPhone}', '${randomAdress}', '${randmonBirth.toISOString().split('T')[0]}')`
            const results = await controllersFunctions.query(connection, sp, paramsSP, true);
            resolve('OK')

        } catch (err) {
            reject(err);
        }
    });
    
}



module.exports = {
    getStudent,
    addStudent
}