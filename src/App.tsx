import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { DatePicker } from 'antd';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DatePicker />
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
