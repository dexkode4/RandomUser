import React, { useState } from 'react';
import cx from 'classnames';
import styles from './Toggle.module.scss';


function Toggle() {
    const [move, setMove] = useState(false);

    return (
        <div className={styles.container}>
            <div className={cx(styles.toggle, move ? styles.toggleOn: styles.toggleOff)} onClick={() => setMove(!move)}>
                <div className={cx(styles.toggleBall, move && styles.toggleBallMove)} />
            </div>
            <span>Show Country</span>
        </div>
    )
}

export default Toggle
