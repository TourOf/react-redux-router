import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { DatePicker } from 'antd';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
  // Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
      <Switch>
        <Route path="/" exact>
          <DatePicker />
        </Route>
        <Route path="/counter" exact>
          <Counter />
        </Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
