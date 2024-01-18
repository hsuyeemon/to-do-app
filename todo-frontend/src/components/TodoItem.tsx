import React from "react";

type Props = TodoProps & {
     updateTodo : (todo:ITodo) => void 
     //deleteTodo : (_id : string) => void
 }

const Todo: React.FC<Props> = ({ todo  , updateTodo}) => {

    const checkTodo: string = todo.status ? `line-through ` : "";
    return (
        <div className="Card">
            <div className="Card--text">
                <h3 className={checkTodo}>{todo.name}</h3>
                <span className={checkTodo}>{todo.description}</span>
            </div>
           

            <div className="Card--button">
                <button
                    onClick={() => {updateTodo(todo)}}
                    className={todo.status ?"hide-button" : "Card--button__done"}
                >Complete</button>
                
            </div>
            <hr />
        </div>

    )

}
export default Todo;
