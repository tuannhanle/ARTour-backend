'use strict'
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-aggregate-paginate');
const searchable = require('mongoose-regex-search');
const Schema = mongoose.Schema;
    const TrelleborgSchema = new Schema({
    vessel:{
        type:String,
        required: true
    },
    ship_type:{
        type:String,
        required: true
    },
    DWT:{
        type:String,
        required: true
    },
    MD:{
        type:String,
        required: true
    },
    LOA:{
        type:String,
        required: true
    },
    LBP:{
        type:String,
        required: true
    },
    B:{
        type:String,
        required: true
    },
    DLT:{
        type:String,
        required: true
    },
    CB:{
        type:String,
        required: true
    },
    min_lateral:{
        type:String,
        required: true
    },
    max_lateral:{
        type:String,
        required: true
    },
    vasco_costa:{
        type:String,
        required: true
    },
    shigera_ueda:{
        type:String,
        required: true
    },
    pianc:{
        type:String,
        required: true
    },
    KC:{
        type:String,
        required: true
    },
    SF:{
        type:String,
        required: true
    },
    FB:{
        type:String,
        required: true
    },

},
    { timestamps: true }
)
TrelleborgSchema.plugin(mongoosePaginate)
const Model = mongoose.model('Trelleborgs',TrelleborgSchema)
module.exports=Model;