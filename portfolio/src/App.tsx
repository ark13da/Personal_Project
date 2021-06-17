import React from 'react';
import './App.scss';
import Header from './components/skeleton/Header';
import Footer from './components/skeleton/Footer';
import Intro from './components/portfolio/Intro';
import Resume from './components/portfolio/Resume';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Intro} />
          <Route path="/resume" exact component={Resume} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
