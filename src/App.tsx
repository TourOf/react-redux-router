import React from 'react';
import logo from './logo.svg';
import { Home } from './views/Home';
import { Cryptocurrencies } from './views/Cryptocurrencies';


import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import { Layout } from 'antd';

function App() {
  const menus = [
    'Home',
    'Cryptocurrencies',
    'Exchanges',
    'News'
  ]
  
  return (
    <Router>
      <Layout className="App">
        <menu className="sidebar">
            {menus.map(menu => <Link key={menu} to={menu.toLowerCase()} className="menu">{menu}</Link>)}
        </menu>
        <main className="main">
            <Switch>
              <Route path={['/', '/home']} exact>
                <Home />
              </Route>
              <Route path="/cryptocurrencies" exact>
                <Cryptocurrencies />
              </Route>
            </Switch>
        </main>
      </Layout>
    </Router>
  );
}

export default App;
