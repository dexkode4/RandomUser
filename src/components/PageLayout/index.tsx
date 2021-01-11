import React from 'react'
import MainContainer from '../MainContainer';
import SideNav from '../SideNavContainer';
import styles from './PageLayout.module.scss';

type PageLayoutProps = {
    children: React.ReactNode,
    userType: string,
    setUserType?: any
}

function PageLayout({ children, userType, setUserType }: PageLayoutProps) {
    return (
        <div className={styles.pageLayout}>

            <div className={styles.pageLayoutFlex}>
                <SideNav userType={userType} setUserType={setUserType} />
                <MainContainer>
                    {children}
                </MainContainer>
            </div>

        </div>
    )
}

export default PageLayout
