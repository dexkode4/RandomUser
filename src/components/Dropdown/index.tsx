import React, { useState, useRef, useContext, useEffect } from 'react';
import styles from './Dropdown.module.scss';
import { IoMdArrowDropdown } from 'react-icons/io'
import { UserContext } from '../../context/userContext';
import { IData } from '../../context/userContext'

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const state = useContext(UserContext);
    const dropDownRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        function handleClickOutside(event: any) {
          if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [dropDownRef, setIsOpen]);
    

    return (
        <>
            <div className={styles.dropdown} onClick={() => setIsOpen(!isOpen)} ref={dropDownRef}>
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
