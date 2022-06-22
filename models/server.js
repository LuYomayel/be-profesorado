const express = require('express')
const cors = require('cors')

const { userRoute, categorieRoute, productRoute, authRoute, searchRoute} = require('../routes')

const { dbConnection } = require('../database/config');
require('dotenv').config();


class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath =     '/api/users'
        this.authPath =         '/api/auth'
        this.categoriesPath =   '/api/categories'
        this.productPath =      '/api/products'
        this.searchPatch =      '/api/search'
        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();
    }
    
    routes(){
        this.app.use(this.usuariosPath, userRoute)
        this.app.use(this.authPath, authRoute)
        this.app.use(this.categoriesPath, categorieRoute)
        this.app.use(this.productPath, productRoute)
        this.app.use(this.searchPatch, searchRoute)
    }

    listen(){
        this.app.listen( this.port, () => console.log(`APP listening to ${this.port}`))
    }

    middlewares(){
        this.app.use( cors() );
        this.app.use( express.static('public'));
        this.app.use( express.json () )
    }

    async conectarDB(){
        await dbConnection();
    }
}

module.exports = Server;