import React, { createContext, useState} from "react";

export const UserContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true" || false
  );

  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [email, setEmail] = useState(localStorage.getItem("email") || null);
  const [firstName, setFirstName] = useState(localStorage.getItem("firstName") || null);
  const [lastName, setLastName] = useState(localStorage.getItem("lastName") || null);


  const loggedIn = (token, email, firstName, lastName) => {
    setToken(token);
    setEmail(email);
    setFirstName(firstName);
    setLastName(lastName);

    localStorage.setItem("token", token);
    localStorage.setItem("email", email); 
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);

    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  const loggedout = () => {
    setToken(null);
    setEmail(null); 
    setFirstName(null);
    setLastName(null);

    localStorage.removeItem("token");
    localStorage.removeItem("email"); 
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");

    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  const value = {
    loggedIn,
    loggedout,
    setIsLoggedIn,
    isLoggedIn,
    email,
    token
  };

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
}