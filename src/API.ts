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