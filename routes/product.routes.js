const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos, validarJWT, isAdminRole } = require('../middlewares');
const { login, googleSignIn } = require('../controllers/auth.controllers');
const { crearProducto, obtenerProducto, obtenerProductos, actualizarProducto, borrarProducto } = require('../controllers/product.controllers');
const { existCategorie, existProduct } = require('../helpers/db-validators');

const router = Router();

router.get('/', obtenerProductos);

router.get('/:id',[
    check('id', 'No es un ID de Mongo valido').isMongoId(),
    check('id').custom(existProduct),
    validarCampos
], obtenerProducto);

router.post('/',[
    validarJWT,
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('categorie', 'No es un id de mongo').isMongoId(),
    check('categorie').custom(existCategorie),
    validarCampos
], crearProducto);

router.put('/:id',[
    validarJWT,
    check('id', 'No es un ID de Mongo valido').isMongoId(),
    check('id').custom(existProduct),
    validarCampos
], actualizarProducto);

router.delete('/:id',[
    validarJWT,
    check('id', 'No es un ID de Mongo valido').isMongoId(),
    check('id').custom(existProduct),
    isAdminRole,
    validarCampos
], borrarProducto);

module.exports = router