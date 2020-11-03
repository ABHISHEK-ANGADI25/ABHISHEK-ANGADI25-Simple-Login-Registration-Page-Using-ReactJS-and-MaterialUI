import React from 'react';
import './App.css';
import Login from './Registration/Login';
import Register from './Registration/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <Switch>
            <Route path="/" exact={true}>
              <Register />
            </Route>
            <Route path="/register" >
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
