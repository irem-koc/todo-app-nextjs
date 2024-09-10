"use client";

import { Todo, Todos } from "@/types";
import { createContext, ReactNode, useContext, useState } from "react";

interface Context {
  todos: Todos;
  editTodo: (todo: Todo) => void;
  addTodo: (todo: Todo) => void;
}

interface Props {
  children: Readonly<ReactNode>;
}

const initialState: Context = {
  todos: [],
  editTodo: () => {},
  addTodo: () => {},
};

export const RootContext = createContext<Context>(initialState);

export const useRootContext = () => useContext(RootContext);

export default function RootContextProvider({ children }: Props) {
  const [todos, setTodos] = useState<Todos>(initialState.todos);
  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };
  const editTodo = (editTodo: Todo) => {
    setTodos(todos.map((todo) => (todo.id === editTodo.id ? editTodo : todo)));
  };
  const values = { todos, addTodo, editTodo };
  return <RootContext.Provider value={values}>{children}</RootContext.Provider>;
}
