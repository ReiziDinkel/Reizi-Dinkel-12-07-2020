import axios, { AxiosResponse } from 'axios';
import { user } from '../types/user';

const url = process.env.REACT_APP_API_URL as string;
const userUrl = `${url}/user`;

const register = (user: user) => {
    return axios.post<any>(userUrl, {
        user
    })
}


const login = (user: user) => {
    return axios.post<any>(`${userUrl}/login`, {
        user
    })
}


export {
    register,
    login
};
