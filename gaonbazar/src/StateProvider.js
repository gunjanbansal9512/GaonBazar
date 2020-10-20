//Setup the data layer
//We need this to track the basket
import React, { createContext, useReducer, useContext } from "react";
//this is the data layer
export const StateContext = createContext();
//build a provider
export const StateProvider = ({ reducer, intialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, intialState)}>
    {children}
  </StateContext.Provider>
);
//This is how we used it inside a component
export const useStateValue = () => useContext(StateContext);
