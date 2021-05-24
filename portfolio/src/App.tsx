import React from 'react';
import './App.scss';
import Header from './components/skeleton/Header';
import Footer from './components/skeleton/Footer';
import Intro from './components/portfolio/Intro';
import Experience from './components/portfolio/Experience';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Intro} />
          <Route path="/experience" exact component={Experience} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
