import React from 'react';
import './App.css';
import SideNav from "./components/sideNav";
import About from "./components/about";
import Resume from "./components/resume";

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <SideNav />
        <main>
          <div className="border">
            <About />
          </div>
          <div className="border">
            <Resume />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
