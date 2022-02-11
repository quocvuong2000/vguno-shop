const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema(
    {
        title : {type : String , required : true , unique : true}
    }, {timestamps : true}
)

module.exports = BrandSchema;