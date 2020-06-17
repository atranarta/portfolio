import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import SideNav from "./components/sideNav";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
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
                <Route path='/skills' component={Skills} />
                <Route path='/contact' component={Contact} />
                <Route path='/projects' component={Projects} />
              </Switch>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
