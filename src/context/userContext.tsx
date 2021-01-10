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
            setUser(res && res.results)
        })

    }, [])

    const state: any = {
        user: user
    }
    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}
