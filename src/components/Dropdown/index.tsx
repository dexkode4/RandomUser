import React, { useState, useRef, useContext } from 'react';
import styles from './Dropdown.module.scss';
import { IoMdArrowDropdown } from 'react-icons/io'
import { UserContext } from '../../context/userContext';
import { IData } from '../../context/userContext'

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const state = useContext(UserContext);

    return (
        <>
            <div className={styles.dropdown} onClick={() => setIsOpen(!isOpen)}>
                country <IoMdArrowDropdown />
                {isOpen && <div className={styles.dropdownOptions}>
                    <ul>
                        {state?.userData.map((data: IData) => (
                            <li onClick={() => state.handleFilterByCountry(data.location.country)}>{data.location.country}</li>
                        ))}
                    </ul>
                </div>}
            </div>
        </>
    )
}

export default Dropdown
