import React, { useState } from 'react'
import Header from '../Header';
import SummaryCard from '../SummaryCard';
import styles from './UserList.module.scss';
import { EmptyTableIcon } from '../../assets/svg'


interface IData {
    name: { title: string; first: string; last: string };
    location: {
      city: string;
      coordinates: { latitude: string; longitude: string },
      street: {name:string, number:number},
      country: string
    };
    picture: { large: string; medium: string; thumbnail: string };
    email: string,
    phone: string
  }
  

type UserListType = {
    data?: IData[],
    isLoading: boolean
}

function UserList({ data, isLoading }: UserListType) {
    return (
        <div className={styles.userlist}>
            { isLoading ? <p>loading...</p>
                :
                data?.map((user: IData) => (
                    <SummaryCard imgUrl={user.picture.medium} name={user.name} street={user.location.street} email={user.email} phone={user.phone} country={user.location.country} />
                ))
            }
        </div>
    )
}

export default UserList
