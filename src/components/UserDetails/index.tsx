import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'

function UserDetails() {
    const users = useContext(UserContext)
    return (
        <div>
            <p>User details</p>
            {JSON.stringify(users)}
        </div>
    )
}

export default UserDetails
