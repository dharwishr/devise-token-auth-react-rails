import React, { createContext } from "react";

const UserContext = createContext();

const UserProvider = props => {
  const currentUser = props.value;

  return (
    <UserContext.Provider value={currentUser}>
      {props.children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
