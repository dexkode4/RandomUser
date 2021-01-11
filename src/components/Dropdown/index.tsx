import React, { useState, useRef } from 'react';
import styles from './Dropdown.module.scss';
import { IoMdArrowDropdown } from 'react-icons/io'

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={styles.dropdown} onClick={() => setIsOpen(!isOpen)}>
                country <IoMdArrowDropdown />
                {isOpen && <div className={styles.dropdownOptions}>
                    <ul>
                        <li>Option one</li>
                        <li>Option two</li>
                        <li>Option three</li>
                        <li>Option four</li>
                        <li>Option five</li>
                        <li>Option six</li>
                    </ul>
                </div>}
            </div>
        </>
    )
}

export default Dropdown
