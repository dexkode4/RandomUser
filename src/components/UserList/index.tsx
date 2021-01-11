import React, { useState } from 'react'
import Header from '../Header';
import styles from './UserList.module.scss';


type UserListType = {
    data?: object[],
    type: string,
    isLoading: boolean
}

function UserList({ data, type, isLoading }: UserListType) {
    const [responseData, setResponseData] = useState(data)
    console.log(isLoading);

    return (
        <div>
            {/* <Header title={type} data={resPonseData} /> */}
            <p>User list</p>
            { isLoading ? <p>loading...</p> : JSON.stringify(data)

                // (<ol>
                //     {
                //         resPonseData?.map((user: any) => <li>{user.name.first}</li>)
                //     }
                // </ol>)
            }
        </div>
    )
}

export default UserList
