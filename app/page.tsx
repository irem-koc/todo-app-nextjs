"use client";
import AddTodo from "@/components/AddTodo";
import { useRootContext } from "@/context/root";
import styles from "./page.module.css";

export default function Home() {
  const { todos, deleteTodo, editTodo, completeTodo } = useRootContext();
  const handleDelete = (id: string) => {
    deleteTodo(id);
  };
  const handleEdit = (id: string, todo: string) => {
    editTodo(id, todo);
  };
  const handleCompleteTodo = (id: string) => {
    completeTodo(id);
  };
  return (
    <div className={styles.page}>
      <AddTodo />
      <div className={styles.todoContainer}>
        {todos.map((todo) => (
          <div key={todo.id} className={styles.todo}>
            <div>
              <input
                type="checkbox"
                onClick={() => handleCompleteTodo(todo.id)}
                defaultChecked={todo.completed}
              />
              {todo.completed ? <s>{todo.todo}</s> : <span>{todo.todo}</span>}
            </div>
            <div className={styles.operations}>
              <span
                className={styles.hoverPointer}
                onClick={() => handleEdit(todo.id, "todo")}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </span>
              <span
                className={styles.hoverPointer}
                onClick={() => handleDelete(todo.id)}
              >
                <i className="fa-regular fa-trash-can"></i>
              </span>
            </div>
          </div>
        ))}
        <hr />
        {todos?.length} görev sayısı.
      </div>
    </div>
  );
}
