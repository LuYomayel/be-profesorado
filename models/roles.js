const { Schema, model } = require('mongoose')

const RolesSchema = Schema({
    role: {
        type: String,
        require: [true, 'El rol es obligatorio']
    }
})

module.exports = model( 'Role', RolesSchema)