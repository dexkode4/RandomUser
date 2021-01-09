import React from 'react';
import styles from './MainContainer.module.scss';


type MainContainerProps = {
    children: React.ReactNode
}
function MainContainer({ children }: MainContainerProps) {
    return (
        <div className={styles.mainContainer}>
            {children}
        </div>
    )
}

export default MainContainer
