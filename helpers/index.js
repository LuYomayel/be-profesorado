const dbValidators = require('./db-validators')
const googleVerify = require('./google-verify')
const generarJWT = require('./generar-JWT')
const subirArchivo = require('./subir-archivo')

module.exports = {
    dbValidators,
    googleVerify,
    generarJWT,
    subirArchivo
}