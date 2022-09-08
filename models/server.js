const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const { userRoute, authRoute, searchRoute, uploadRoute, studentRoute, professorRoute} = require('../routes')

const { dbConnection } = require('../database/config');
require('dotenv').config();


class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.usuariosPath =     '/api/users'
        // this.authPath =         '/api/auth'
        // this.categoriesPath =   '/api/categories'
        // this.productPath =      '/api/products'
        // this.searchPatch =      '/api/search'
        // this.uploadPatch =      '/api/uploads'
        this.studentPatch =      '/api/students'
        this.professorPatch =      '/api/professors'
        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();
    }
    
    routes(){
        this.app.use(this.usuariosPath, userRoute)
        // this.app.use(this.authPath, authRoute)
        // this.app.use(this.searchPatch, searchRoute)
        // this.app.use(this.uploadPatch, uploadRoute)
        this.app.use(this.studentPatch, studentRoute)
        this.app.use(this.professorPatch, professorRoute)
    }

    listen(){
        console.log(this.port)
        this.app.listen( this.port, () => console.log(`APP listening to ${this.port}`))
    }

    middlewares(){
        this.app.use( cors() );
        this.app.use( express.static('public'));
        this.app.use( express.json () )
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/'
        }));
    }

    async conectarDB(){
        await dbConnection();
    }
}

module.exports = Server;