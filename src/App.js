import React from 'react';
import './App.css';
import SideNav from "./components/sideNav";
import About from "./components/about";
import Resume from "./components/resume";
import Portfolios from "./components/portfolios";
import Contact from "./components/contact";

function App() {
  return (
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
  );
}

export default App;
