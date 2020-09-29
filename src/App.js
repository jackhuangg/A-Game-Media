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
require("dotenv").config();

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
              <PodcastList
                channel="unathletic"
                title="The UnAthletic"
                summary="The A-Game Co-Founders, Ahdi & Ahira both grew up playing all sports Baseball to Basketball. Although neither one of them “made” it in big leagues in their respective sports the love of the game has always been there. From interviewing former/current athletes to discussing various topics in the realm of sports, The UnAthletic is sure to have something for everyone to bring out their inner athlete."
              />
            </Route>
            <Route path="/A-Game-Talks" component={PodcastList}>
              <PodcastList
                channel="agametalks"
                title="A-Game Talks"
                summary="Regardless of the career path or craft, there are certain experiences that launch individuals to the top of their respective field.  Through these various stories, we hope that our audience can gather the necessary tools/ inspiration to ultimately become the best version of themselves and bring out their “A-Game.” "
              />
            </Route>
            {/* <Route path = '/PlayPodcast' 
          render = { (props) =>  < PlayPodcast data = {this.props.coursesData} />} /> */}
            <Route path="/PlayPodcast" component={PlayPodcast}>
              <PlayPodcast />
            </Route>
            <Route path="/Connect" component={Connect}>
              <Connect />
            </Route>
            <Route
              exact
              strict
              path={`/Admin/${process.env.REACT_APP_PASSWORD}`}
              component={Admin}
            >
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
