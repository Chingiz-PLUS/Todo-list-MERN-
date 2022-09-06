const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({path: "./config.env"});



// Routers:
const todoRouter = require("./routes/todoRouter")


const app = express();

app.use(cors());
app.use(express.json());

app.use("/todo",todoRouter);



const DB = process.env.DB_STRING.replace("<password>", process.env.DB_PASS);
mongoose.connect(DB,(err)=>{
    if(err)return console.log(err);

    const PORT = process.env.PORT
    app.listen(PORT,()=>console.log(`server started on port: ${PORT}`));
})

