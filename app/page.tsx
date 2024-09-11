"use client";
import AddTodo from "@/components/AddTodo";
import { useRootContext } from "@/context/root";
import styles from "./page.module.css";

export default function Home() {
  const { todos, deleteTodo } = useRootContext();
  const handleDelete = (id: string) => {
    deleteTodo(id);
  };
  return (
    <div className={styles.page}>
      <AddTodo />
      <div className={styles.todoContainer}></div>
      {todos.map((todo) => (
        <div key={todo.id} className={styles.todo}>
          <div>
            <input type="checkbox" defaultChecked={todo.completed} />
            <span>{todo.todo}</span>
          </div>
          <div className={styles.operations}>
            <span className={styles.hoverPointer}>
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
    </div>
  );
}
