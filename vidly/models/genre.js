const mongoose=require('mongoose');
const Joi=require('joi');

const genereSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:5,
        maxlength:50
    }
});

const Genre=mongoose.model('Genre',genereSchema);

function validateGenre(genre)
{
    const schema={
        name:Joi.string.min(3).required()
    };

    return Joi.validate(genre,schema);
}

exports.genereSchema=genereSchema;
exports.Genre=Genre;
exports.validate=validateGenre;