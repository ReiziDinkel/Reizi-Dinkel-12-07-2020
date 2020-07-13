import React from 'react'; // let's also import Component
import { Login } from './login';
import { Grid, createMuiTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      color: theme.palette.secondary.main
    },
  },
}));

export const Home = () => {
  const classes = useStyles();

  return <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    className="home-container"
  >
    <Grid item xs={12} className={classes.root}>
      <h1>Welcome to propit!!</h1>
      <h4>please login to start manage your tasks</h4>
    </Grid>
    <Grid item xs={12}>
      <Login />
    </Grid>
  </Grid>
}