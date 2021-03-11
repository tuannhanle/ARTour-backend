'use strict'
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-aggregate-paginate');
const searchable = require('mongoose-regex-search');

const Schema = mongoose.Schema;
    const ProjectSchema = new Schema({
    ProjectName:{
        type:String,
        required: true
    },
    ProjectLocation:{
        type:String,
        required: true
    },
    Standard:{
        type:String,
        required: true
    },
    Tool:{
        type:String,
        required: true
    }

},
    { timestamps: true }
)
ProjectSchema.plugin(mongoosePaginate)
const Model = mongoose.model('Project',ProjectSchema)
module.exports=Model;