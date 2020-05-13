import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import SideNav from "./components/sideNav";
import About from "./components/about";
import Resume from "./components/resume";
import Portfolios from "./components/portfolios";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="wrapper">
          <SideNav />
          <main>
            <div className="border">
              <Switch>
                <Route exact path='/' component={About} />
                <Route path='/resume' component={Resume} />
                <Route path='/contact' component={Contact} />
                <Route path='/portfolios' component={Portfolios} />
              </Switch>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
