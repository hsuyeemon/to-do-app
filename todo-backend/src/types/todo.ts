import mongoose from "mongoose";

export interface ITodo extends mongoose.Document{
    name : string ,
    description : string , 
    status : boolean
}