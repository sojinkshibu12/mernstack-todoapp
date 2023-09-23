const cors = require('cors');
require("dotenv").config()
const express = require("express");
const cros = require("cors");
const mongoose = require("mongoose");
const router = require("./router");

const app = express();
app.use(cors({
  origin: ['https://mernstack-todoapp-api.vercel.app/'],
  methods : ["POST","GET"],
  credentials:true

}));

mongoose.connect(process.env.MONGODB_URL);
app.use(router);












app.listen(3000,(err) =>{
  if(err){
    console.log(err);
  }else{
    console.log("started at port" + 3000);
  }
})
