const authRoute = require('./auth.routes')
const categorieRoute = require('./categories.routes')
const productRoute = require('./product.routes')
const userRoute = require('./user.routes')
const searchRoute = require('./search.routes')
const uploadRoute = require('./uploads.routes')
const studentRoute = require('./student.routes')

module.exports = {
    categorieRoute,
    productRoute,
    userRoute,
    authRoute,
    searchRoute,
    uploadRoute,
    studentRoute
}
