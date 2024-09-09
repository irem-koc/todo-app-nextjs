"use client";

import { createContext, ReactNode, useContext } from "react";

interface Context {}
interface Props {
  children: Readonly<ReactNode>;
}
const initialState: Context = {};
export const RootContext = createContext<Context>(initialState);
export const useRootContext = () => useContext(RootContext);
export default function RootContextProvider({ children }: Props) {
  const values = {};
  return <RootContext.Provider value={values}>{children}</RootContext.Provider>;
}
