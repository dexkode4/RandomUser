import React, { useState } from 'react';
import styles from './SideNav.module.scss';
import { FaUsers, FaMale, FaFemale } from 'react-icons/fa';
import Button from '../CustomButton';
import SearchField from '../SearchField';

const buttonsDetails = [
    {
        icon: <FaUsers />,
        title: "All Users"
    },
    {
        icon: <FaMale />,
        title: "Male Users"
    },
    {
        icon: <FaFemale />,
        title: "Female Users"
    },
]


function SideNav() {
    // const [state, setState] = useState("All Users");

    return (
        <div className={styles.sideNav}>
            <header className={styles.sideNavGreetings}>Hello, <span className={styles.sideNavName}>Emerald</span></header>
            <p className={styles.sideNavWelcomeMsg}>Welcome to your dashboard, kindly sort through the user base</p>
            <SearchField placeholder="Find a user" size="big" />
            <header className={styles.showUser}>Show Users</header>
            <div className={styles.buttonGroup}>
                {
                    buttonsDetails.map((item, index) => (<Button key={index} title={item.title} icon={item.icon}/>))
                }
            </div>
        </div>
    )
}

export default SideNav
