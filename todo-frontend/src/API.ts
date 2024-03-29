// to fetch data from the api

import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:4000";

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {

    try {

        const todos: AxiosResponse<ApiDataType> = await axios.get(
            baseUrl + "/todos"
        );
        return todos
    } catch (error) {
        throw error
    }


}

export const addTodo = async (formData: ITodo): Promise<AxiosResponse<ApiDataType>> => {
    try {

        const todo: Omit<ITodo, "_id"> = {
            name: formData.name,
            description: formData.description,
            status: false

        }

        const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
            baseUrl + "/add-todo",
            todo
        )
        return saveTodo
    } catch (error) {
        throw error

    }
}

export const updateTodo = async (formData : ITodo) : Promise<AxiosResponse<ApiDataType>> => {
    try {
        
        const todo: ITodo = {
            _id : formData._id , 
            name : formData.name ,
            description : formData.description,
            status : true
        }
        console.log("API.ts")

        const updateTodo : AxiosResponse<ApiDataType> = await axios.put(
            baseUrl + "/update-todo", 
            todo
        )   
        console.log("API.ts")

        return updateTodo
    } catch (error) {
        throw error
        
    }
}