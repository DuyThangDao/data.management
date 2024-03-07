import mongoose from "mongoose";

const schema = mongoose.Schema({
    nickname : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    follower : {
        type : String,
        required : true
    },
    link : {
        type : String,
        required : true
    },
    total_item : String,
    rate : {
        type : String,
        required :true,
        default : 'N/A'
    },
    response_rate : String,
    response_time : String 
}, {timestamps : true});

export const TableModel = mongoose.model('TableModel',schema);