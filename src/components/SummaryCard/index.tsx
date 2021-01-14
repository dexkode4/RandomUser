import React, { useContext } from 'react';
import cx from 'classnames';
import { useHistory } from 'react-router-dom';
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
    country?: string,
    uuid: string
}


function SummaryCard({ imgUrl, name, street, email, phone, country, uuid }: SummarycardType) {
    const state = useContext(UserContext);
    const history = useHistory();

    const chooseColorBg = () => {
        if (state?.userCategory === "All Users") {
            return "bgAll"
        }
        else if (state?.userCategory === "Male Users") {
            return "bgMale"
        }
        else {
            return "bgFemale"
        }
    }
    return (
        <div className={styles.card} data-testid="summary-card">
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

            <div className={styles.cardBtn} onClick={() => history.push(`/${uuid}`)}>
                <AiOutlineArrowRight />
            </div>
            { state?.toggleCountry && <div className={cx(styles.cardCountry, styles[chooseColorBg()])}>{country}</div>}
        </div>
    )
}

export default SummaryCard
