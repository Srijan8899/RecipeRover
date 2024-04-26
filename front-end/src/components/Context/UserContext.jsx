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
  const [id, setId] = useState(localStorage.getItem("id") || null);
  const [favorites, setFavorites] = useState(localStorage.getItem("id") || null);


  const loggedIn = (token, email, firstName, lastName, id, favorites) => {
    setToken(token);
    setEmail(email);
    setFirstName(firstName);
    setLastName(lastName);
    setId(id);
    setFavorites(favorites);

    localStorage.setItem("token", token);
    localStorage.setItem("email", email); 
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("id", id);
    localStorage.setItem("favorites", favorites);

    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  const loggedout = () => {
    setToken(null);
    setEmail(null); 
    setFirstName(null);
    setLastName(null);
    setId(null);
    setFavorites(null);

    localStorage.removeItem("token");
    localStorage.removeItem("email"); 
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("id");
    localStorage.removeItem("favorites");

    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  const value = {
    loggedIn,
    loggedout,
    setIsLoggedIn,
    isLoggedIn,
    email,
    token,
    id,
    favorites
  };

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
}