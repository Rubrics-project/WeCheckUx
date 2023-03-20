import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  currentUser: {},
  userToken: null,
  setCurrentUser: () => {},
  setUserToken: () => {},
});

export const AuthProvider = ({ children }) => {
  //se necesita el user? quizás solo para imprimir mis rubricas filtrando por user id implementarlo en ese momento entonces
  // const [currentUser, setCurrentUser] = useState({});
  const [userToken, setUserToken] = useState(localStorage.getItem("token"));

  return (
    <AuthContext.Provider
      value={{
        // currentUser,
        // setCurrentUser,
        userToken,
        setUserToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const userAuthContext = () => useContext(AuthContext);
