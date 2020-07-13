import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './components/home';
import { TasksList } from './components/tasksList';
import { Register } from './components/register';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={Register} exact />
        <Route path="/login" component={Home} exact />
        <Route path="/tasks" component={TasksList} />
        <Route path="*" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
