import React from 'react';
import './App.scss';
import Header from './components/skeleton/Header';
import Footer from './components/skeleton/Footer';
import Intro from './components/portfolio/Intro';
import Resume from './components/portfolio/Resume';
import Projects from './components/portfolio/Projects';
import Contact from './components/portfolio/Contact';
import { HashRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router >
        <Header />
        <div className="mainContent">
          <Switch>
            <Route path="/" exact component={Intro} />
            <Route path="/resume" exact component={Resume} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
