import React, { useContext } from 'react';
import cx from 'classnames';
import styles from './CustomButton.module.scss';
import { UserContext } from '../../context/userContext';

type ButtonType = {
    icon: JSX.Element,
    title: string,
}


function Button({ icon, title }: ButtonType) {
    const state = useContext(UserContext);
    return (
        <div className={styles.container}>
            <button className={cx(styles.button,
                title === "All Users" ? styles.buttonAll
                    : title === "Male Users" ? styles.buttonMale
                        : styles.buttonFemale,
                state?.userCategory === title && styles.buttonActive)}
                onClick={() => {
                    state?.handleUserCategory(title);
                }
                }>{icon}</button>
            <p>{title}</p>
        </div>
    )
}

export default Button
