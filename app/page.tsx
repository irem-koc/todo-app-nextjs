"use client";
import AddTodo from "@/components/AddTodo";
import { useRootContext } from "@/context/root";
import styles from "./page.module.css";

export default function Home() {
  const { todos } = useRootContext();
  return (
    <div className={styles.page}>
      <AddTodo />
      {todos.map((todo) => (
        <div key={todo.id} className={styles.todo}>
          <input type="checkbox" defaultChecked={todo.completed} />
          <p>{todo.todo}</p>
        </div>
      ))}
    </div>
  );
}
