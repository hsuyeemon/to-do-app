import React from "react";

type Props =TodoProps 
// TODO : To add update and delete funcs 
// & {
//     updateTodo : (todo:ITodo) => void 
//     deleteTodo : (_id : string) => void
// }

const Todo: React.FC<Props> = ({ todo }) => {

    const checkTodo : string = todo.status ? `line-through ` : "";
    return (
        <div className="Card">
            <div className="Card--text">
                <h3 className={checkTodo}>{todo.name}</h3>
                <span className={checkTodo}>{todo.description}</span>
            </div>
            <hr/>
        </div>
        
    )

}
export default Todo;
