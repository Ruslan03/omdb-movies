import './App.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Movie from './Movie';


function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:imdbID" component={Movie} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
