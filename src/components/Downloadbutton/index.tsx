import React from 'react'
import styles from './Downloadbutton.module.scss';
import { IoIosCloudDownload } from 'react-icons/io';

function DownloadButton() {
    return (
        <div className={styles.downloadBtn}>
            <IoIosCloudDownload />
            <span>Download results</span>
        </div>
    )
}

export default DownloadButton
