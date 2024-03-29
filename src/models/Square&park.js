const mongoose = require('mongoose');

const SquareParkSchema = new mongoose.Schema({
    type:{
        type: String,
        default: "Feature"
    },
    properties: {
        name:{
            type: String,
            required:true
        },
        address:{
            type:String,
            required:true,
            
        },
        area:{
            type: Number,
            required:false
        },
        centroid:{
            type:[Number],
            required:false,
            index:"2dsphere"
        }
    },
    geometry:{
        type:{
            type: String,
            required: true,
            default: "Polygon"
        },
        coordinates:{
            type:[[[Number]]],
            required:true,
            index:"2dsphere"
        }
    }    
}, {
    timestamps: true
});

const SquarePark = mongoose.model('square&parks', SquareParkSchema)

module.exports = SquarePark