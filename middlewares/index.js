const validaCampos = require('../middlewares/validar-campos');
const validaRoles = require('../middlewares/validar-roles');
const validaJWT = require('../middlewares/validar-JWT');

module.exports={
    ...validaCampos,
    ...validaRoles,
    ...validaJWT
}