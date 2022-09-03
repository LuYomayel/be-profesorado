// const { Schema, model } = require('mongoose')


// const StudentSchema= Schema({
//     name: {
//         type:String,
//         required: [true, 'El nombre es obligatorio'],
//         unique:true
//     },
//     lastname:{
//         type: Boolean,
//         default:true,
//         required: true
//     },
//     user:{
//         type: Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
//     price:{
//         type:Number,
//         default: 0,

//     },
//     categorie:{
//         type: Schema.Types.ObjectId,
//         ref: 'Categorie',
//         required: true
//     },
//     description:{
//         type: String
//     },
//     available: {
//         type: Boolean,
//         default:true
//     }

// });

// ProductSchema.methods.toJSON = function(){
//     const { __v, estado, ...product } = this.toObject();
    
//     return product;
// }

// module.exports = model( 'Student', StudentSchema)