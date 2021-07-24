import React, { createContext, useContext } from "react";
import { useCustomData } from "../hooks/useCustomData";

export const TextContext = createContext();
export const TextContextProvider = (props) => {
const customDataContext = useCustomData();

  return (
    <TextContext.Provider value={customDataContext}>
      {props.children}
    </TextContext.Provider>
  );
};
