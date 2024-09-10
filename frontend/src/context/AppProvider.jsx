import React, { createContext, useContext, useState } from "react";
const AppContext = createContext(null);
export function useAppContext() {
  return useContext(AppContext);
}
const AppProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [currentCatagory, setCurrentCatagory] = useState(0);
  const [isSearch, setIsSearch] = useState(false);
  const [searchPara, setSearchPara] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  return (
    <AppContext.Provider
      value={{
        articles,
        setArticles,
        currentCatagory,
        setCurrentCatagory,
        setIsSearch,
        isSearch,
        searchPara,
        setSearchPara,
        showFilter,
        setShowFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
