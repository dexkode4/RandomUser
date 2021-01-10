import React from 'react';
import cx from 'classnames';
import styles from './CustomButton.module.scss';

type ButtonType = {
    icon: JSX.Element,
    title: string,
    userType: string,
    setState: any
}


function Button({ icon, title, userType, setState }: ButtonType) {
    return (
        <div className={styles.container}>
            <button className={cx(styles.button,
                title === "All Users" ? styles.buttonAll
                    : title === "Male Users" ? styles.buttonMale
                        : styles.buttonFemale,
                userType === title && styles.buttonActive)}
                onClick={() => {
                    setState(title)
                    }}>{icon}</button>
            <p>{title}</p>
        </div>
    )
}

export default Button
