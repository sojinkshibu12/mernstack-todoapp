
const { text } = require("body-parser");
const mongoose = require("mongoose");

const todoschema = new mongoose.Schema({
    text: {
        type:String,
        require:true
    }
});

const tododb = mongoose.model("tododb",todoschema);

module.exports.gettodo = async (req,res)=>{
    const todos = await tododb.find();
    res.send(todos);
}

module.exports.savetodos = async (req,res)=>{
    const {text} = req.body;
    console.log(req.body);
    tododb
    .create({ text })
    .then((data) => {
        console.log(data);
        console.log("added succesfully....");
        res.send(data);
    })

    
}
module.exports.deletetodos = async(req,res)=>{
    const {_id } = req.body;
    tododb
    .findByIdAndDelete(_id)
    .then((data)=>{
        console.log("deleted succesfully....");
        res.send(data);
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports.updatetodo = async(req,res)=>{
    const {_id } = req.body;
    const{text} = req.body;
    tododb
    .findByIdAndUpdate(_id,text)
    .then((data)=>{
        console.log("updated succesfully....");
        res.send(data);
    })
    .catch((err)=>{
        console.log(err);
    })
}