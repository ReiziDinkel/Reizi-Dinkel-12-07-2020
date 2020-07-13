import axios, { AxiosResponse } from 'axios';
import { user } from '../types/user';

const url = process.env.REACT_APP_API_URL as string;
const authUrl = `${url}/user`;

const register = (user: user) => {
    return axios.post<any>(authUrl, {
        user
    })
}


const login = (user: user) => {
    return axios.post<any>(`${authUrl}/login`, {
        user
    })
}


export {
    register,
    login
};
