import React from 'react';
import cx from 'classnames';
import { BsSearch } from 'react-icons/bs';
import styles from './SearchField.module.scss';

type SearchFieldType = {
    placeholder: string,
    size: string,
    handleChange?: any
}

function SearchField({ placeholder, size, handleChange }: SearchFieldType) {
    return (
        <div className={cx(styles.container, size === "big" ? styles.bigBtn : styles.smallBtn)}>
            <BsSearch />
            <input placeholder={placeholder} onChange={handleChange} />
        </div>
    )
}

export default SearchField
