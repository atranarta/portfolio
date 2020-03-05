import React from 'react';
import './App.css';
import SideNav from "./components/sideNav";
import About from "./components/about";

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <SideNav />
        <About />
      </div>
    </div>
  );
}

export default App;
