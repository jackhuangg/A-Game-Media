import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbars';
import About from './components/About';
import BlogList from './components/BlogList';
import PodcastList from './components/PodcastList';
import PodcastMenu from './components/PodcastMenu'
import Connect from './components/Connect'
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
          <Route path="/Blog" component={BlogList}>
            <BlogList />
          </Route>
          <Route path="/Podcasts" component={PodcastMenu}>
            <PodcastMenu />
          </Route>
          <Route path="/UnAthletic" component={PodcastList}>
            <PodcastList channel="unathletic"/> 
            {/* passes in respective channel's name so podcast component
            only prints out specific channel PodcastList */}
          </Route>
          <Route path="/A-Game-Talks" component={PodcastList}>
            <PodcastList channel="agametalks"/>
          </Route>
          <Route path="/Connect" component={Connect}>
            <Connect />
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
