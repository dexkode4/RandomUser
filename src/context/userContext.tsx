import React, { createContext, useState, useMemo } from 'react';

export interface IData {
    name: { title: string; first: string; last: string };
    location: {
        city: string;
        coordinates: { latitude: string; longitude: string },
        street: { name: string, number: number },
        country: string
    };
    picture: { large: string; medium: string; thumbnail: string };
    email: string,
    phone: string,
    login: { uuid: string }
    dob: { age: number, date: string },
    registered: { date: string },
    cell: string,
    gender: string
}
interface ContextValues {
    userCategory: string;
    handleUserCategory: (T: string) => void,
    handleToggleCountry: () => void;
    toggleCountry: boolean;
    page: number,
    nextPage: () => void,
    prevPage: () => void,
    userData: any,
    handleUserData: (data: IData[]) => void,
    country: string,
    handleFilterByCountry: (text: string) => void

}


export const UserContext = createContext<ContextValues | null>(null);

type Propstype = {
    children: React.ReactNode
}


export const UserContextProvider = ({ children }: Propstype) => {
    const [userCategory, setUserCategory] = useState("All Users");
    const [toggleCountry, setToggleCountry] = useState(false);
    const [page, setPage] = useState(1)
    const [userData, setUserData] = useState<IData[]>([]);
    const [country, setCountry] = useState("");

    const handleUserCategory = (text: string) => {
        setUserCategory(text);
    }
    const handleFilterByCountry = (text: string) => {
        setCountry(text);
    }

    const handleToggleCountry = () => {
        setToggleCountry(!toggleCountry);
    }

    const nextPage = () => {
        setPage(prev => prev + 1)
    }
    const prevPage = () => {
        setPage((prev) => {
            if (prev <= 1) {
                return prev
            }
            else {
                return prev - 1
            }
        })
    }

    const handleUserData = (data: IData[]) => {
        setUserData(data)
    }


    const contextValue = useMemo(
        () => ({
            userCategory,
            handleUserCategory,
            handleToggleCountry,
            toggleCountry,
            page,
            nextPage,
            prevPage,
            userData,
            handleUserData,
            country,
            handleFilterByCountry
        }),
        [userCategory, handleUserCategory]
    );

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}
