const { Schema, model } = require('mongoose')

const CategorieSchema= Schema({
    name: {
        type:String,
        required: [true, 'El nombre es obligatorio'],
        unique:true
    },
    estado:{
        type: Boolean,
        default:true,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

});

CategorieSchema.methods.toJSON = function(){
    const { __v, estado, ...categorie } = this.toObject();
    
    return categorie;
}

module.exports = model( 'Categorie', CategorieSchema)