import React from 'react'
import styles from './Header.module.scss';


type HeaderType = {
    title: string
}
function Header({title}: HeaderType) {
    return (
        <div className={styles.header}>
            <h2 className={styles.headerTitle}>{title}</h2>
        </div>
    )
}

export default Header
