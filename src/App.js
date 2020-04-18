import React from 'react';
import Parent from './components/Parent.jsx';
import Landing from './Landing.jsx';
import Parser from './Parser.jsx';
import Register from './components/Register.jsx';
import Dashboard from './components/Dashboard.jsx';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/editor" component={Parent}/>
          <Route exact path="/parser" component={Parser}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
