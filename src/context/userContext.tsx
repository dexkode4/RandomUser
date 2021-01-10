import React, { createContext, useState, useEffect } from 'react';
import { fetchUsers } from '../API';

export const UserContext = createContext([]);

type Propstype = {
    children: React.ReactNode
}


export const UserContextProvider = ({ children }: Propstype) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetchUsers().then(res => {
            setUser(res.results)
        })

    }, [])
    return (
        <UserContext.Provider value={user} >
            {children}
        </UserContext.Provider>
    )
}
