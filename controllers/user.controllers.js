const { response } = require('express')

const bcrypt = require('bcryptjs')
const controllersFunctions = require('../controllers/controllers.functions')

const userGet = async()=> {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await controllersFunctions.newConnection();
            const sp = 'sp_getUsuarios';
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

const userGetById = async(params)=> {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await controllersFunctions.newConnection();
            const sp = 'sp_getUsuario';
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

const userPut = async (params)=> {
    return new Promise(async (resolve, reject) => {
        try {
            // const result = await userGet();
            // const {getAllProfessors} = require('./professor.controllers')
            // const profesores = await getAllProfessors();
            // const connection = await controllersFunctions.newConnection();
            // const sp = 'sp_putUsuario';
            // if(profesores){
            //     profesores.forEach(async (alumno, index) => {
            //         const nombreCompleto = `${alumno.nombre}${alumno.apellido}`;
            //         result.forEach(async (usuario,index) => {
            //             const usuarioNombreCompleto = usuario.email.split('@')[0];
            //             if(nombreCompleto == usuarioNombreCompleto) {
                            
                            
            //                 const paramsSP = `(${usuario.idUsuario}, '${alumno.dni}')`
            //                 const results = await controllersFunctions.query(connection, sp, paramsSP, false);

            //             }
            //         })

            //     })
            // }
            // // console.log(result)
            // // const salt = bcrypt.genSaltSync();
            // resolve(profesores)

        } catch (err) {
            reject(err);
        }
    });
    

    const {name, email, password, role} = new User(req.body);
    const user = new User({name, email, password, role})

    // Verificar el correo
    

    // Encriptar la contraseña
    const salt = bcrypt.genSaltSync(); // Por defecto en 10
    user.password = bcrypt.hashSync( password, salt );

    await user.save();
    res.json({
        user
    })
}

// const userPut= async(req, res = response)=> {
//     const { id } = req.params;
//     const { _id, password, google,email, ...resto} = req.body;

//     //TODO Validar contra BBDD
//     if(password){
//         const salt = bcrypt.genSaltSync(); // Por defecto en 10
//         resto.password = bcrypt.hashSync( password, salt );
//     }

//     const user  = await User.findByIdAndUpdate(id, resto)

//     res.json({
//         user
//     })
// }

const userDelete = async (req, res = response)=> {
    const {id} = req.params;

    const user = await  User.findByIdAndUpdate(id, {estado: false})
    const userAuth = req.user

    res.json({
        user, userAuth
    })
}


module.exports = {
    userGet,
    userDelete,
    userPut,
    userGetById
}