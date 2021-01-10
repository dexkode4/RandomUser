import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext';
import styles from './UserList.module.scss';

function UserList() {
    // const { user } = useContext(UserContext)
    return (
        <div>
            <p>User list</p>
            {/* {JSON.stringify(user)} */}
        </div>
    )
}

export default UserList
