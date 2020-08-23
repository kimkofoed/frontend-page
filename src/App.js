import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Recipe from './components/Recipe';
import Navigation from './components/Navigation';
import Error from './components/Error';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Recipe' component={Recipe} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
