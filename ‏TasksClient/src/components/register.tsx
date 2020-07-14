import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid, Link, MenuItem } from '@material-ui/core';
import { user } from '../types/user';
// import * as Roles from "../types/roles";
import * as AuthApi from '../services/UserService';
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        // width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export const Register = () => {


    const [user, setUser] = useState<user>({ email: '', password: '', role: '' });
    const roles = ["admin", "user"];
    const history = useHistory();


    const classes = useStyles();


    const register = () => {
        AuthApi.register(user)
            .then(({ data }) => {
                history.push("/login")

            }).catch((err) => {
                console.log(err)
            });
    }

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            className="home-container"
        >
            <Grid item xs={12}>
                <div className={classes.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={user.email}
                        onChange={e => setUser({ ...user, email: e.target.value })}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={user.password}
                        onChange={e => setUser({ ...user, password: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        name="role"
                        id="standard-select-currency"
                        select
                        label="Select role"
                        value={roles[0]}
                        onChange={e => setUser({ ...user, role: e.target.value })}
                        helperText="Role">
                        {roles.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button
                        onClick={register}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>
                        Sign Up
                 </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="login" variant="body2">
                                {"Already have an account? Sign In"}
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    );
}