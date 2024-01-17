import mongoose from "mongoose";


const todoSchema = new mongoose.Schema({
    name : {type:String, required : true},
    description : {type:String , requierd : true},
    status : { type : Boolean , required : true}
})

export const TodoModel = mongoose.model("Todo", todoSchema);
