import React, { useContext } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail, AiOutlineArrowRight } from 'react-icons/ai';
import styles from './Summarycard.module.scss';
import { UserContext } from '../../context/userContext';


type SummarycardType = {
    imgUrl: string,
    name: Record<string, string>,
    street: Record<string, string | number>,
    email: string,
    phone: string,
    country?: string
}


function SummaryCard({ imgUrl, name, street, email, phone, country }: SummarycardType) {
    const state = useContext(UserContext);
    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <img src={imgUrl} alt={imgUrl} />
            </div>
            <div className={styles.cardDetails}>
                <h1>{name?.first} {name?.last}</h1>
                <p>{street?.number} {street?.name}</p>
                <div className={styles.cardDetailsContact}>
                    <span> <AiOutlineMail /> {email}</span>
                    <span> <FiPhoneCall />{phone}</span>
                </div>
            </div>
            
            <div className={styles.cardBtn}>
                <AiOutlineArrowRight />
            </div>
            { state?.toggleCountry && <div className={styles.cardCountry}>{country}</div>}
        </div>
    )
}

export default SummaryCard
