import React, { useState } from 'react'
import Header from '../Header';
import SummaryCard from '../SummaryCard';
import styles from './UserList.module.scss';
import { EmptyTableIcon } from '../../assets/svg'
import Shimmer from '../Shimmer';


interface IData {
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
}


type UserListType = {
    data?: IData[],
    isLoading: boolean
}

function UserList({ data, isLoading }: UserListType) {
    const shimmerStore = new Array(5).fill("_");
    return (
        <div className={styles.userlist}>
            { isLoading ? <>
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
            </>
                :
                data?.map((user: IData, index) => (
                    <SummaryCard key={index}
                        imgUrl={user.picture.medium}
                        name={user.name}
                        street={user.location.street}
                        email={user.email}
                        phone={user.phone}
                        country={user.location.country}
                        uuid={user.login.uuid} />
                ))
            }
        </div>
    )
}

export default UserList
