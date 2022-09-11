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

const userGetByDNI = async(params)=> {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await controllersFunctions.newConnection();
            const sp = 'sp_getUsuarioByDNI';
            
            const paramsSP = `(${params.dni})`
            const results = await controllersFunctions.query(connection, sp, paramsSP, true);
            
            if (results[0].length > 0) {
                resolve(results[0]);
            }
            else {
                
                reject('Error: Ese usuario no existe');
            }

        } catch (err) {
            reject(err);
        }
    });
}

const userPut = async (params, body)=> {
    return new Promise(async (resolve, reject) => {
        try {
            
            const contra = body.contraseña;
            
            const connection = await controllersFunctions.newConnection();
            const sp = 'sp_putUsuario';
            const paramsSP = `('${params.dni}', '${body.contraseña}')`;
            // console.log(paramsSP)
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
    userGetById,
    userGetByDNI
}