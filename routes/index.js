const authRoute = require('./auth.routes')
const userRoute = require('./user.routes')
const searchRoute = require('./search.routes')
const uploadRoute = require('./uploads.routes')
const studentRoute = require('./student.routes')
const professorRoute = require('./professor.routes')

module.exports = {
    
    
    userRoute,
    authRoute,
    searchRoute,
    uploadRoute,
    studentRoute,
    professorRoute
}
