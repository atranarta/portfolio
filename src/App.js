import React from 'react';
import './App.css';
import SideNav from "./components/SideNav";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolios from "./components/Portfolios";
import Contact from "./components/Contact";

const theme = {
  background: "#282c34",
}

function App() {
  return (
    <div className="App"
      style = {{
        background: theme.background,
      }}>
      <button>Change Theme</button>
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
