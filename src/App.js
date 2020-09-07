import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbars";
import Home from "./components/Home";
import About from "./components/About";
import BlogList from "./components/BlogList";
import PodcastList from "./components/PodcastList";
import PodcastMenu from "./components/PodcastMenu";
import PlayPodcast from "./components/PlayPodcast";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Admin from "./components/Admin";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="NotFooter">
        <Router>
          <Switch>
            <Route path="/" exact component={Home}>
              <Home />
            </Route>
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
              <PodcastList channel="unathletic" />
            </Route>
            <Route path="/A-Game-Talks" component={PodcastList}>
              <PodcastList channel="agametalks" />
            </Route>
            {/* <Route path = '/PlayPodcast' 
          render = { (props) =>  < PlayPodcast data = {this.props.coursesData} />} /> */}
            <Route path="/PlayPodcast" component={PlayPodcast}>
              <PlayPodcast />
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
      <Footer />
    </div>
  );
}

export default App;
