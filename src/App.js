import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';

import SideNav from "./components/SideNav";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolios from "./components/Portfolios";
import Contact from "./components/Contact";


function App() {
  return (
    <Router>
      <div className="App">
        <div id="wrapper">
          <SideNav />
          <main>
            <div className="border">
              <About />
              <Resume />
              <Portfolios />
              <Contact />
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
