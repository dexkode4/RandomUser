import React, { useContext, useState } from 'react';
import cx from 'classnames';
import styles from './Toggle.module.scss';
import { UserContext } from '../../context/userContext';


function Toggle() {
    const [move, setMove] = useState(false);
    const state = useContext(UserContext);

    return (
        <div className={styles.container}>
            <div className={cx(styles.toggle, move ? styles.toggleOn : styles.toggleOff)} onClick={() => {
                setMove(!move)
                state?.handleToggleCountry()
            }}>
                <div className={cx(styles.toggleBall, move && styles.toggleBallMove)} />
            </div>
            <span>Show Country</span>
        </div>
    )
}

export default Toggle
