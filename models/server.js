const express = require('express')
const cors = require('cors')
const usuarios = require('../routes/user.routes');
const auth = require('../routes/auth.routes');
const { dbConnection } = require('../database/config');
require('dotenv').config();


class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/users'
        this.authPath = '/api/auth'
        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();
    }
    
    routes(){
        this.app.use(this.usuariosPath, usuarios)
        this.app.use(this.authPath, auth)
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