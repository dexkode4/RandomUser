import React, { useContext } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { UserContext } from '../../context/userContext';
import DownloadButton from '../Downloadbutton';
import styles from './Footer.module.scss';

function Footer() {
    const state = useContext(UserContext);
    return (
        <div className={styles.footer}>
            <DownloadButton />

            <div className={styles.paginationBtn}>
                <div className={styles.prev} onClick={() => state?.prevPage()}><BiChevronLeft /></div>
                <div className={styles.next} onClick={() => state?.nextPage()}><BiChevronRight /></div>
            </div>
        </div>
    )
}

export default Footer
