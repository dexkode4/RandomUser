import React, { useContext } from 'react'
import styles from './Downloadbutton.module.scss';
import { IoIosCloudDownload } from 'react-icons/io';
import fileDownload from 'js-file-download';
import { UserContext } from '../../context/userContext';
import { IData } from '../../context/userContext'


const jsonToCsv = (data: any) => {
    const headers = Object.keys(data[0]);
    const csvRows = [];
    csvRows.push(headers.join(','));

    for (const row of data) {
        const values = headers.map((header: any) => {
            const escapedQoute = ('' + row[header]).replace(/"/g, '\\"')
            return `"${escapedQoute}"`;
        })
        csvRows.push(values.join(','));

    }
    return csvRows.join('\n');
}

function DownloadButton() {
    const state = useContext(UserContext);

    const formattedData = state?.userData.map((data: IData) => ({
        Fullname: `${data.name.first} ${data.name.last}`,
        Gender: data.gender,
        Dob: data.dob.date,
        Email: data.email,
        Phone: data.phone,
        Cell: data.cell,
        Address: `${data.location.street.number} ${data.location.street.name}, ${data.location.city} ${data.location.country}`

    }))
    
    const download = () => {
        console.log(jsonToCsv(formattedData));
        const data = jsonToCsv(formattedData);
        let blob = new Blob([data], { type: 'text/csv' });
        fileDownload(blob, "user.csv");
    }
    return (
        <div className={styles.downloadBtn} onClick={download}>
            <IoIosCloudDownload />
            <span>Download results</span>
        </div>
    )
}

export default DownloadButton
