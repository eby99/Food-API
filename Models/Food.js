const mongoose=require("mongoose")
const schema=mongoose.Schema({

    "fname":String,
    "desc":String,
    "hotel":String,
    "cname":String


})

let foodsmodel=mongoose.model("foods",schema);
module.exports={foodsmodel}