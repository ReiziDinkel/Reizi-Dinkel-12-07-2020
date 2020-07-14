import React, { useState, useEffect } from 'react';
import TasksTable from './tasksTable';
import { task } from '../types/task';
import InfiniteScroll from 'react-infinite-scroller';
import { Grid, Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as TaskApi from '../services/TaskService';


export interface TableProps {
    tasks: any[];
    onDelete: any;
    onEdit: any;
    onSave: any;
}

export const TasksList = () => {

    const [tasks, setTasks] = useState<task[]>([]);


    useEffect(() => {
        initializeData();
    }, []);

    const initializeData = async () => {
        await getTasks();
    }

    const getTasks = async () => {
        TaskApi.getTasks()
            .then(({ data }) => {
                setTasks(tasks => [...data]);
            }).catch((err) => {
                console.log(err)
            });
    }

    const deleteTask = async (id: string) => {
        setTasks(tasks => [...tasks.filter(({ _id }) => _id != id)]);
        await TaskApi.deleteTasks(id);
    }

    const saveTask = async (task: task) => {
        if (task._id == '') {
            const newTask = (await TaskApi.createTask(task)).data;
            setTasks(tasks => [
                newTask,
                ...tasks.slice(1)
            ]);
        }
        else await TaskApi.updateTask(task);
    }

    const editTask = (task: any) => {
        setTasks([...tasks.map((p) => {
            if (p._id === task._id) return task;
            return p;
        })])
    }

    const create = () => {
        const newTask = { _id: '', createDate: '', email: '', phone: '', userName: '' };
        setTasks(tasks => [
            newTask,
            ...tasks
        ]);;
    }

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center">
            <Grid item xs={10}>
                <div className="tasks-list">
                    <Button variant="contained" color="primary" onClick={create}>
                        Create task
            </Button>
                    <TasksTable tasks={tasks} onDelete={deleteTask}
                        onSave={saveTask} onEdit={editTask} />
                </div>
            </Grid>
        </Grid>
    );
}
