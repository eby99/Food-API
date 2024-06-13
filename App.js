const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {foods}=require("./Models/Food.js")
const {foodsmodel}=require("./Models/Food.js")

const app=express()
app.use(cors())

app.use(express.json())
// mongoose.connect("mongodb+srv://eby99:qwerty123@cluster0.snm8zbn.mongodb.net/foodsapps?retryWrites=true&w=majority&appName=Cluster0")
mongoose.connect("mongodb+srv://eby99:qwerty123@cluster0.snm8zbn.mongodb.net/foodsDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/Add",(req,res)=>{
    let input = req.body
    let foods=new foodsmodel(input)
    foods.save()
    console.log(foods)
    
    res.json({status:"success"})
})



app.get("/View",(req,res)=>{
    foodsmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
    
})

app.post("/Search",(req,res)=>{
    let input=req.body
    foodsmodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.post("/Delete",(req,res)=>{
    let input=req.body
    foodsmodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"Deleted"})
        }
    ).catch(
        (error)=>{
            res.json({"status":"Error"})
        }
    )
    
})

app.listen(8080,()=>(
    console.log("Server ON !")
))

