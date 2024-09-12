"use client";

import { Todo, Todos } from "@/types";
import { createContext, ReactNode, useContext, useState } from "react";

interface Context {
  todos: Todos;
  editTodo: (id: string, todoChanged: string) => void;
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  completeTodo: (id: string) => void;
}

interface Props {
  children: Readonly<ReactNode>;
}

const initialState: Context = {
  todos: [],
  editTodo: () => {},
  addTodo: () => {},
  deleteTodo: () => {},
  completeTodo: () => {},
};

export const RootContext = createContext<Context>(initialState);

export const useRootContext = () => useContext(RootContext);

export default function RootContextProvider({ children }: Props) {
  const [todos, setTodos] = useState<Todos>(initialState.todos);
  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };
  const editTodo = (id: string, todoChanged: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: todoChanged } : todo
      )
    );
  };
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const completeTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const values = { todos, addTodo, editTodo, deleteTodo, completeTodo };
  return <RootContext.Provider value={values}>{children}</RootContext.Provider>;
}
