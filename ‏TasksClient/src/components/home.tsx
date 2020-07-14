import React from 'react'; // let's also import Component
import { Login } from './login';
import { Grid, createMuiTheme, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { TasksList } from './tasksList';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      color: theme.palette.secondary.main
    },
    marginTop: theme.spacing(5)
  },
}));

export const Home = () => {
  const classes = useStyles();
  const history = useHistory();


  const signOut = () => {
    sessionStorage.clear();
    history.push("/login");
  }

  return <Grid
    container
    spacing={5}
    direction="column"
    justify="center"
    className={classes.root}>
    <Grid item xs={12} alignItems="center">
      <Button variant="contained" color="primary" onClick={signOut}>
        Sign out
            </Button>
    </Grid>
    <Grid item xs={12}>
      <TasksList />
    </Grid>
  </Grid>
}