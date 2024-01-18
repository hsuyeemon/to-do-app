import express from 'express';
import { ITodo } from '../../types/todo';
import { TodoModel } from '../../models/todo';


// get all items in  todolist
export const getTodos =async (req:express.Request, res : express.Response) => {
    try {
        const todos: ITodo[] = await TodoModel.find();
        res.status(200).json({todos})
    }
    catch (error){
        throw error;
    }
}

// add new todo item
export const addTodo =async (req:express.Request , res : express.Response) => {

    try {
        
        const { name , description,status} = req.body as ITodo;

        const todo  = await new TodoModel({
            name , 
            description,
            status
        }).save(); 

        const allTodos : ITodo[] = await TodoModel.find()

        res.status(201).json({
            message : "Todo added",
            todo : todo , 
            todos : allTodos
        })



    } catch (error) {
        throw error
    }
    
}

// update todo item

export const updateTodo = async (req : express.Request , res : express.Response ) => {

    try {
        
        const { _id , name , description , status } = req.body as ITodo ;

        const todo = await TodoModel.findByIdAndUpdate(_id , {
            name , description,status
        })

        console.log(todo)
        const allTodos : ITodo[] = await TodoModel.find()

        res.status(200).json({
            message : "Todo updated",
            todo : todo , 
            todos : allTodos
        })


    } catch (error) {
        throw error
        
    }
}