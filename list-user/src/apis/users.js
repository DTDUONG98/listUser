import axios from 'axios'

const url = 'https://randomuser.me/api?page=2&results=';
const param = 10;

export const getListUsers = () => {
    return axios.get(`${url}${param}`);
}