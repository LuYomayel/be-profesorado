const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos, validarJWT, isAdminRole } = require('../middlewares');
const { login, googleSignIn } = require('../controllers/auth.controllers');
const { crearCategoria, obtenerCategorias, obtenerCategoria, actualizarCategoria, borrarCategoria } = require('../controllers/categories.controllers');
const { existCategorie } = require('../helpers/db-validators');

const router = Router();

router.get('/', obtenerCategorias);

router.get('/:id',[
    check('id', 'No es un ID de Mongo valido').isMongoId(),
    check('id').custom(existCategorie),
    validarCampos
], obtenerCategoria);

router.post('/',[
    validarJWT,
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearCategoria);

router.put('/:id',[
    validarJWT,
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('id', 'No es un ID de Mongo valido').isMongoId(),
    check('id').custom(existCategorie),
    validarCampos
], actualizarCategoria);

router.delete('/:id',[
    validarJWT,
    check('id', 'No es un ID de Mongo valido').isMongoId(),
    check('id').custom(existCategorie),
    isAdminRole,
    validarCampos
], borrarCategoria);

module.exports = router