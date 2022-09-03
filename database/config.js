const mongoose = require('mongoose');
const mysql = require('mysql');
const config = require('../configurations/database.configurations')

const connection = mysql.createConnection(config);

const dbConnection =  async() => {
    try {
        await connection.connect(function(err) {
            // en caso de error
            if(err){
                console.log('Error conexion BD 1',err.code);
                console.log('Error conexion BD 2',err.fatal);
            }
            console.log('Base de datos online')
        });
        // await mongoose.connect( process.env.MONGODB_CNN, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        //     // useCreateIndex: true,
        //     // useFindAndModify:false,
           
        // } )


    } catch (error) {
        console.log('Error conexion BD 3',error)
        throw new Error('Error: no se pudo conectar a la base de datos');
    }
}


module.exports = {
    dbConnection,
    config: connection
}