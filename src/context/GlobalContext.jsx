import { createContext, useState } from "react";

const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [query, setQuery] = useState("SELECT * FROM Products");

  return (
    <GlobalContext.Provider
      value={{
        query,
        setQuery,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { ContextProvider, GlobalContext };
