import express from 'express';
import { getTodos , addTodo } from "../controllers/todos"
const router = express.Router();

router.get("/todos", getTodos);
router.post("/add-todo", addTodo);

export default router;