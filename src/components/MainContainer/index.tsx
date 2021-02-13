import React from 'react';
import Footer from '../Footer';
import styles from './MainContainer.module.scss';


type MainContainerProps = {
    children: React.ReactNode
}
function MainContainer({ children }: MainContainerProps) {
    return (
        <div className={styles.mainContainer}>
            {children}
            <Footer />
        </div>
    )
}

export default MainContainer
