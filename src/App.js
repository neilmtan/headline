import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Editor from './components/Editor.jsx';
import Landing from './Landing.jsx';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/editor" component={Editor}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
