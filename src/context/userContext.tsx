import React, { createContext, useState, useMemo } from 'react';


interface ContextValues {
    userCategory: string;
    handleUserCategory: (T: string) => void;
    handleToggleCountry: () => void;
    toggleCountry: boolean;
}


export const UserContext = createContext<ContextValues | null>(null);

type Propstype = {
    children: React.ReactNode
}


export const UserContextProvider = ({ children }: Propstype) => {
    const [userCategory, setUserCategory] = useState("All Users");
    const [toggleCountry, setToggleCountry] = useState(false);

    const handleUserCategory = (text: string) => {
        setUserCategory(text);
    }

    const handleToggleCountry = () => {
        setToggleCountry(!toggleCountry);
    }


    const contextValue = useMemo(
        () => ({
            userCategory,
            handleUserCategory,
            handleToggleCountry,
            toggleCountry
        }),
        [userCategory, handleUserCategory]
    );

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}
