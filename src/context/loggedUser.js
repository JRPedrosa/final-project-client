import React from "react";

const { Consumer, Provider } = React.createContext();
//export const MyContext = React.createContext();

//export const LoggedUserConsumer = MyContext.Consumer;


export const LoggedUserConsumer = Consumer;
export const LoggedUserProvider = Provider;