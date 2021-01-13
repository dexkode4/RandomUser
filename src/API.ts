import axios from 'axios';


export const getAllUsers = async (page : number | undefined) => {
    return await axios.get('https://randomuser.me/api', {
        params: {
            results: 5,
            page: page,
        }
    })
        .then((res) => {
            return res.data && res.data;
        }).catch(err => console.error(err))
}


export const getMaleUsers = async ( page: number | undefined) => {
    return await axios.get('https://randomuser.me/api', {
        params: {
            results: 5,
            gender: "male",
            page: page,
        }
    })
        .then((res) => {
            return res.data && res.data;
        }).catch(err => console.error(err))
}


export const getFemaleUsers = async ( page: number | undefined) => {
    return await axios.get('https://randomuser.me/api', {
        params: {
            results: 5,
            gender: "female",
            page: page,
        }
    })
        .then((res) => {
            return res.data && res.data;
        }).catch(err => console.error(err))
}
