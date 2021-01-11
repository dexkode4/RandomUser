import React, { createContext, useState, useEffect, HtmlHTMLAttributes } from 'react';
import { fetchUsers } from '../API';

export const UserContext = createContext([]);

type Propstype = {
    children: React.ReactNode
}


export const UserContextProvider = ({ children }: Propstype) => {


    const [user, setUser] = useState([]);
    const [filteredUser, setFilteredUser] = useState([]);

    const filtered = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const data  = user.filter((item: any) => item.name.first.slice(0, value.length) === value)

        setFilteredUser(data)
    }

    useEffect(() => {
        fetchUsers().then(res => {
            setUser(res && res.results)
        })

    }, [])

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}
