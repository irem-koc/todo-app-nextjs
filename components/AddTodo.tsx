"use client";
import { FormEvent } from "react";
import styles from "./addTodo.module.css";

const AddTodo = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("name"), "formdata");
  };
  return (
    <form onSubmit={handleSubmit} className={styles.mainContainer}>
      <input type="text" name="name" placeholder="Enter todo.." />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
