import express from 'express';
import { getTodos , addTodo , updateTodo  } from "../controllers/todos"
const router = express.Router();

router.get("/todos", getTodos);
router.post("/add-todo", addTodo);
router.put("/update-todo", updateTodo);

export default router;