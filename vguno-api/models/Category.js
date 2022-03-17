const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
    {
        title : {type: String, required : true, unique : true},
        icon : {type : String, default : "bx bx-like"}
    }, {timestamps : true}
)

module.exports = mongoose.model("Category",CategorySchema);