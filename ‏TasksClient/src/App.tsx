import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './components/home';
import { TasksList } from './components/tasksList';
import { Register } from './components/register';
import { Login } from './components/login';
import { isAuthenticated } from './services/AuthService';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={Register} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/tasks" component={Home} />
        <Route
          exact
          path="*"
          render={props =>
            isAuthenticated() ? (<Home />)
              : (
                <Login />)} />)}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
