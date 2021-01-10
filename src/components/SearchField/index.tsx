import React from 'react';
import cx from 'classnames';
import { BsSearch } from 'react-icons/bs';
import styles from './SearchField.module.scss';

type SearchFieldType = {
    placeholder: string
}

function SearchField({ placeholder }: SearchFieldType) {
    return (
        <div className={cx(styles.container, styles.bigBtn)}>
            <BsSearch />
            <input placeholder={placeholder} />
        </div>
    )
}

export default SearchField
