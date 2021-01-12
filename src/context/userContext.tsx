import React, { createContext, useState, useEffect, HtmlHTMLAttributes } from 'react';
import { fetchUsers } from '../API';


interface ContextValues {
    userCategory: string;
    handleUserCategory: (T: string) => void;
  }


export const UserContext = createContext<ContextValues | null>(null);

type Propstype = {
    children: React.ReactNode
}


export const UserContextProvider = ({ children }: Propstype) => {
    const [userCategory, setUserCategory] = useState("All Users");

    const handleUserCategory = (text: string)  => {
        setUserCategory(text);
    }

    const contextValue = React.useMemo(
        () => ({
            userCategory,
            handleUserCategory,
        }),
        [userCategory, handleUserCategory]
      );

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}
