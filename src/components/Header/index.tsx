import React from 'react'
import Dropdown from '../Dropdown';
import SearchField from '../SearchField';
import Toggle from '../Toggle';
import styles from './Header.module.scss';

type HeaderType = {
    title: string,
    data?: any,
    handleChange: any
}
function Header({ title, data, handleChange }: HeaderType) {
    return (
        <div className={styles.header}>
            <h2 className={styles.headerTitle}>{title}</h2>
            <p>Filter by</p>
            <div className={styles.headerAction}>
                <SearchField placeholder="Find in list" size="small" handleChange={handleChange} />
                <Dropdown />
                <Toggle/>
            </div>
        </div>
    )
}

export default Header
