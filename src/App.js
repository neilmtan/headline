import React from 'react';
import Parent from './components/Parent.jsx';
import Landing from './Landing.jsx';
import Parser from './Parser.jsx';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/editor" component={Parent}/>
          {/* <Route exact path="/parser" component={Parser}/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
