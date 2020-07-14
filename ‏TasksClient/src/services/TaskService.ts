import axios, { AxiosResponse } from 'axios';
import { task } from '../types/task';
import { authHeader } from './AuthService';


const url = process.env.REACT_APP_API_URL as string;
const taskUrl = `${url}/task`;

const getTasks = () => {
    return axios.get<task[]>(`${taskUrl}`, {
        headers: authHeader()
    })
}

const createTask = (task: task) => {
    return axios.post<task>(taskUrl, {
        task
    }, {
        headers: authHeader()
    })
}

const deleteTasks = async (id: string) => {
    axios.delete<any>(`${taskUrl}/${id}`, { headers: authHeader() })
        .then((response: AxiosResponse) => {
        }).catch((err) => {
            console.log(err)
        })
}

const updateTask = async (task: task) => {
    axios.put<task[]>(`${taskUrl}/${task._id}`, {
        task
    }, {
        headers: authHeader()
    }).then((response: AxiosResponse) => {
    }).catch((err) => {
        console.log(err)
    });
}

export {
    createTask,
    getTasks,
    deleteTasks,
    updateTask
};
