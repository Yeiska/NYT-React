var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Articleschema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
    },
    date:{
        type: String,
    }
})