const { Router } = require('express');
const { userGet,userPost, userPut, userDelete, userGetById } = require('../controllers/user.controllers');
const { check } = require('express-validator');

const {validarCampos, validarJWT, hasRole, isAdminRole} = require('../middlewares')

const { validRole, existMail, existUser } = require('../helpers/db-validators');


const router = Router();

router.get('/', userGet)
router.get('/:id', userGetById)
router.post('/',[ 
    check('email', 'El correo no es valido').isEmail(),
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe contener mas de 6 caracteres').isLength({min:6}),
    // check('role', 'No es un role valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom(validRole),
    check('email').custom(existMail),
    validarCampos
], userPost)
router.put('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existUser),
    check('role').custom(validRole),
    validarCampos
], userPut)
router.delete('/:id',[
    validarJWT,
    // isAdminRole,
    hasRole(['ADMIN_ROLE', 'USER_ROLE']),
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existUser),
    validarCampos
], userDelete)

module.exports = router;