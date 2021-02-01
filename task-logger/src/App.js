import React from "react";
import Counter from "./components/counter";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'





function App() {
  return (
    <div>

      <div className="container-fluid">
        <div className="row">

          <div className="emptyLeft col-md-1"></div>

          <div className="contentPlace col-md-10">

            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
              <a className="navbar-brand" href="#mainTitle" >TaskLogger</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#inputTask">Enter new</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Tasks list</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#stats">Stats</a>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="padded">
              <Counter />
            </div>

          </div>

          <div className="emptyRight col-md-1"></div>

        </div>
      </div>
    </div>




  );
}

export default App;