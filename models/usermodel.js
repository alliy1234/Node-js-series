
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/shriyanslec')
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.error(err));

const studentschema= new mongoose.Schema({
    name:String,
    email:String,
    address:String,
})

module.exports=mongoose.model('Student',studentschema);