import axios, { AxiosResponse } from 'axios';
import { task } from '../types/task';

const url = process.env.REACT_APP_API_URL as string;

const getTasks = () => {
    return axios.get<task[]>(`${url}`)
}

const createTask = (task: task) => {
    return axios.post<task>(url, {
        task
    })
}

const deleteTasks = async (id: string) => {
    axios.delete<any>(url, { data: id })
        .then((response: AxiosResponse) => {
        }).catch((err) => {
            console.log(err)
        })
}

const updateTask = async (task: task) => {
    axios.post<task[]>(url, {
        task
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
