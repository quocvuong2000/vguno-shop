const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title : {type : String, required: true, unique: true},
        description : {type : String},
        price : {type : Number , required : true},
        image : { type : String, required : true},
        category : {type : String , required : true},
        brand : {type : String, required : true},
        quantity : {type : Number , required : true},
        status : {type : Boolean , required : true}
    },{timestamps : true}
);

module.exports = mongoose.model("Product", ProductSchema);