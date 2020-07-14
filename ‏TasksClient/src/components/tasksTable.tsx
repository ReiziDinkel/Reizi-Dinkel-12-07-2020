import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Table, TableContainer, TableBody, TableHead, TableCell, withStyles, TextField } from '@material-ui/core';
import { TableProps } from './tasksList';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneTwoToneIcon from '@material-ui/icons/DoneTwoTone';
import EditIcon from '@material-ui/icons/Edit';


const TasksTableHead = () => {
    return (
        <TableHead>
            <TableRow>
                <StyledTableCell
                    key="userName">
                    User name
                </StyledTableCell>
                <StyledTableCell
                    key="phone">
                    Phone number
                </StyledTableCell>
                <StyledTableCell
                    key="email">
                    Email
                </StyledTableCell>
                <StyledTableCell>
                </StyledTableCell>
            </TableRow>
        </TableHead>
    );
}

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            textTransform: "capitalize"
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            alignItems: 'center',
            marginTop: theme.spacing(3)
        },
        paper: {
            width: '100%',
            minWidth: 750,
            overflowX: 'auto',
            marginBottom: theme.spacing(2)
        },
        table: {
            minWidth: 750,
        },
        visuallyHidden: {
            border: 0,
            clip: 'rect(0 0 0 0)',
            height: 1,
            margin: -1,
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            top: 20,
            width: 1,
        },
    }),
);

const useTextStyles = makeStyles(theme => ({
    disabledInput: {
        color: theme.palette.text.primary,
    },
    input: {
        color: theme.palette.text.primary,
    }
}));

const TasksTable = (props: TableProps) => {

    const classes = useStyles();
    const textClasses = useTextStyles();
    const [editableTaskId, setEditableTaskId] = React.useState<string>();
    const { tasks } = props;
    const taskKeys = ['userName', 'phone', 'email'];

    const deleteTask = (data: any) => {
        props.onDelete([data._id]);
    }

    const saveTask = () => {
        const id = editableTaskId || '';
        const task = tasks.find((t) => t._id == id);
        props.onSave(task);
        setEditableTaskId('');
    }

    const editTask = (value: string, key: string, row: any) => {
        row[key] = value;
        props.onEdit(row);
    }

    const setRowEditable = (data: any) => {
        setEditableTaskId(data._id);
    }

    const isEditable = (id: string) => editableTaskId === id || id == '';


    return (
        <div className={classes.root}>
            <Paper className={classes.paper} >
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size="small">
                        <TasksTableHead />
                        <TableBody>
                            {tasks.map((row, index) => {
                                const isDisable = !isEditable(row._id);
                                const rowId = `row-${index}`;
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        key={rowId}>
                                        {taskKeys.map((key, i) =>
                                            (<TableCell key={`row-${i}`}>
                                                <TextField onChange={e => editTask(e.target.value, key, row)} value={row[key]} disabled={isDisable} InputProps={{
                                                    disableUnderline: isDisable,
                                                    classes: { disabled: textClasses.disabledInput }
                                                }} />
                                            </TableCell>
                                            ))}
                                        <TableCell>
                                            {isDisable ? (<div><DeleteIcon onClick={e => deleteTask(row)}></DeleteIcon>
                                                <EditIcon onClick={e => setRowEditable(row)}></EditIcon></div>) : (
                                                    <DoneTwoToneIcon onClick={saveTask}></DoneTwoToneIcon>)}
                                        </TableCell>
                                    </TableRow>);
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div >);
}

export default TasksTable;