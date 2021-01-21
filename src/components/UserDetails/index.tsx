import React, { useContext, useEffect, useState } from 'react'
import cx from 'classnames';
import { BiArrowBack } from 'react-icons/bi';
import { MdPhoneIphone } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/userContext'
import { IData } from '../../context/userContext'
import styles from './UserDetails.module.scss';
import { useHistory } from 'react-router-dom';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';


function UserDetails() {
    const state = useContext(UserContext);
    const match: { userId: string } = useParams();
    const [user, setUser] = useState<IData | null>(null);
    const history = useHistory();

    console.log("match ", match);


    useEffect(() => {
        const search = state?.userData.find((user: IData) => user.login.uuid === match.userId);
        setUser(search)
    }, [match.userId, state?.userData])


    return (
        <div className={styles.container}>
            <div className={styles.backBtn} onClick={() => history.push('/')}><BiArrowBack />results</div>
            <div className={styles.user}>
                <div className={styles.userImageContainer}>
                    <img src={user?.picture.large} alt={user?.email} />
                </div>
                <div className={styles.userDetails}>
                    <h2 className={styles.userName}> {user?.name.title} {user?.name.first} <span className={styles.userAge}>{user?.dob.age}</span></h2>
                    <div className={styles.userLocation}>
                        <span className={styles.userLocationNumber}>{user?.location.street.number}</span>
                        <span className={styles.userLocationName}>{user?.location.street.name}</span>
                    </div>

                    <div className={cx(styles.userEmail, styles.email_JoinedAt)}>
                        <AiOutlineMail /> {user?.email}
                    </div>
                    <div className={cx(styles.userJoinedAt, styles.email_JoinedAt)}>
                        JOINED: {user?.registered.date.substr(0, user?.registered.date.indexOf('T'))}
                    </div>

                    <div className={styles.userPhone}>
                        <FiPhoneCall /> {user?.phone}
                    </div>
                    <div className={styles.userPhone}>
                        <MdPhoneIphone /> {user?.cell}
                    </div>
                </div>
            </div>

            <div className={styles.overlay} />
        </div>
    )
}

export default UserDetails

