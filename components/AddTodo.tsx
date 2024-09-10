"use client";
import { useRootContext } from "@/context/root";
import { FormEvent } from "react";
import styles from "./addTodo.module.css";

const AddTodo = () => {
  const { addTodo } = useRootContext();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("name"), "vformData.ge");

    addTodo({
      id: Math.random().toString(36).substr(2, 9),
      todo: formData.get("name") as string,
      completed: false,
    });
    event.currentTarget.reset();
  };
  return (
    <form onSubmit={handleSubmit} className={styles.mainContainer}>
      <input type="text" name="name" placeholder="Enter todo.." />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
