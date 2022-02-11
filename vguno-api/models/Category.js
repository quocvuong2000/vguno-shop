const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
    {
        title : {type: String, required : true, unique : true}
    }, {timestamps : true}
)

module.exports = CategorySchema;