import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext';
import Dropdown from '../Dropdown';
import SearchField from '../SearchField';
import Toggle from '../Toggle';
import styles from './Header.module.scss';

type HeaderType = {
    handleChange: any
}

function Header({ handleChange }: HeaderType) {
    const state = useContext(UserContext);
    return (
        <div className={styles.header}>
            <h2 className={styles.headerTitle}>{state?.userCategory}</h2>
            <p>Filter by</p>
            <div className={styles.headerAction}>
                <SearchField placeholder="Find in list" size="small" handleChange={handleChange} />
                <Dropdown />
                <Toggle />
            </div>
        </div>
    )
}

export default Header
