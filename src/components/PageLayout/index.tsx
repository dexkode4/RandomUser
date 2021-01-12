import React from 'react'
import MainContainer from '../MainContainer';
import SideNav from '../SideNavContainer';
import styles from './PageLayout.module.scss';

type PageLayoutProps = {
    children: React.ReactNode,
}

function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className={styles.pageLayout}>

            <div className={styles.pageLayoutFlex}>
                <SideNav/>
                <MainContainer>
                    {children}
                </MainContainer>
            </div>

        </div>
    )
}

export default PageLayout
