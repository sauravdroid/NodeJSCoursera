var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Adding comment schema

var commentSchema = new Schema({
    rating:{
        type:Number,
        require:true,
        min:1,
        max:5
    },
    comment:{
        type:String,
        required:true
    },
    author:{
        required:true,
        type:String
    }
},{
    timestamps:true
});
//Create a Schema
var dishSchema = new Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    description:{
        type:String,
        require:true
    },
    comments:[commentSchema] //Now it can point to an array of point schema
},{
    timestamps:true
});
var Dishes = mongoose.model('Dish',dishSchema);
module.exports = Dishes;