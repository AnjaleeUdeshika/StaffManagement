const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const staffSchema = new Schema({
    staffId:{
        type : String,
        required : true //backend validation
    },
    name:{
        type : String,
        required : true //backend validation
    },
    staffType: {
        type : String,
        required : true //backend validation
    },
    age:{
        type: Number,
       required : true //backend validation
    },
    gender: {
        type : String,
        required : true //backend validation
    },
    address: {
        type : String,
        required : true //backend validation
    },
    phone: {
        type : String,
        required : true //backend validation
    },
    NIC: {
        type : String,
        //required : true //backend validation
    },
    userName: {
        type : String,
        // required : true //backend validation
    },
    password: {
        type : String,
        // required : true //backend validation
    }
  
})

const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff;