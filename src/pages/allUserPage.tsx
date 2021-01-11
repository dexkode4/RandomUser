import React, { useState, useEffect } from 'react'
import { getAllUsers } from '../API'
import Header from '../components/Header'
import PageLayout from '../components/PageLayout'
import UserList from '../components/UserList'


type allUserPageProps = {
    userType: string,
    setUserType?: any
}

function AllUserPage({ userType, setUserType }: allUserPageProps) {
    const [page, setPage] = useState(1);
    const [resPonseData, setResponseData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        getAllUsers({ page }).then((res) => {
            console.log('====================================');
            console.log("all users", res?.results);
            console.log('====================================');
            setResponseData(res?.results)
            setIsLoading(false);
        }).catch(err => {
            setIsLoading(false);
        })
    }, [])
    return (
        <div>
            <PageLayout userType={userType} setUserType={setUserType}>
                {/* <Header title={userType} data={resPonseData} /> */}
                {/* <UserList type={userType} data={resPonseData} /> */}
            </PageLayout>
        </div>
    )
}

export default AllUserPage
