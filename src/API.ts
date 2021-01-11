import axios from 'axios';

export const fetchUsers = async () => {
    return await axios.get('https://randomuser.me/api', {
        params: {
            results: 50
        }
    })
        .then((res) => {
            return res.data && res.data;
        }).catch(err => console.error(err))
}

interface IUsers {
    page: number
}
export const getAllUsers = async ({ page }: IUsers) => {
    return await axios.get('https://randomuser.me/api', {
        params: {
            results: 5,
            page: page
        }
    })
        .then((res) => {
            return res.data && res.data;
        }).catch(err => console.error(err))
}


export const getMaleUsers = async ({ page }: IUsers) => {
    return await axios.get('https://randomuser.me/api', {
        params: {
            results: 5,
            gender: "male",
            page: page
        }
    })
        .then((res) => {
            return res.data && res.data;
        }).catch(err => console.error(err))
}


export const getFemaleUsers = async ({ page }: IUsers) => {
    return await axios.get('https://randomuser.me/api', {
        params: {
            results: 5,
            gender: "female",
            page: page
        }
    })
        .then((res) => {
            return res.data && res.data;
        }).catch(err => console.error(err))
}
