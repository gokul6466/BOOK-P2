const express = require("express");
const {users} = require("./data/Users.json");

const app = express();

const PORT = 8081;

app.use(express.json());


app.get("/",(req,res)=>{
    res.status(200).json({
        message:"server is up and running:-)",
    });
});


/**
 * Route:/users
 * Method:GET
 * Description:Get all users
 * access:Public
 * parameters:None
 */
app.get("/users",(req,res)=>{
    res.status(200).json({
        success:true,
        data:users
    });
});









app.get("*",(req,res)=>{
    res.status(404).json({
        message:"this route doesnt exist",
    });
});

app.listen(PORT,()=>{
    console.log("server is running at port ${PORT}");
});