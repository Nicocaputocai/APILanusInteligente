const mongoose = require('mongoose');

const seguridadSchema = new mongoose.Schema({
    type:{
        type: String,
        default: "Features"
    },
    properties: {
        name:{
            type: String,
            required:true
        },
        type:{
            type:String,
            required:true,
            default:'Comisaría'        
        }
    },
    geometry:{
        type:{
            type: String,
            required: true,
            default: "Point"
        },
        coordenates:{
            type:[String],
            required:true,
            index:"2dsphere"
        }
    }    
}, {
    timestamps: true
});

const Seguridad = mongoose.model('Seguridad', seguridadSchema)

module.exports = Seguridad