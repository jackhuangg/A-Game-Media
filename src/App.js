import React from 'react';
import './App.css';
import Navbar from './components/Navbars';
import About from './components/About';
import Blog from './components/Blog';
import Podcasts from './components/Podcasts';
import Admin from './components/Admin'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route path="/About" component={About}>
            <About />
          </Route>
          <Route path="/Blog" component={Blog}>
            <Blog />
          </Route>
          <Route path="/Podcasts" component={Podcasts}>
            <Podcasts />
          </Route>
          <Route path="/Admin" component={Admin}>
            <Admin />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
