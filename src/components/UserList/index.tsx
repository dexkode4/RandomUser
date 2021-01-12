import React, { useState } from 'react'
import Header from '../Header';
import SummaryCard from '../SummaryCard';
import styles from './UserList.module.scss';
import {EmptyTableIcon} from '../../assets/svg'


type UserListType = {
    data?: object[],
    isLoading: boolean
}

function UserList({ data, isLoading }: UserListType) {

    return (
        <div>
            { isLoading ? <p>loading...</p>
                :
                data?.map((user: any) => (
                    <SummaryCard imgUrl={user.picture.medium} name={user.name} street={user.location.street} email={user.email} phone={user.phone} country={user.location.country}/>
                ))
            }
        </div>
    )
}

export default UserList
