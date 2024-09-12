"use client";
import { useRootContext } from "@/context/root";
import { FormEvent } from "react";
import styles from "./style.module.css";
const AddTodo = () => {
  const { addTodo } = useRootContext();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    addTodo({
      id: crypto.randomUUID(),
      todo: formData.get("name") as string,
      completed: false,
    });
    event.currentTarget.reset();
  };
  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder="Enter todo.."
      />
      <button className={styles.button} type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
