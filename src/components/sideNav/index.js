import React from 'react';
import Avatar from './../../img/avatar.jpeg';


const sideNav = () => (
  <aside id="sideNav">
    <div className="heading">
      <div className="avatar-wrap">
        <img src={Avatar} className="avatar" alt="Tetiana Rabiievska" width="170px"></img>
      </div>
    </div>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#portfolios">Portfolios</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </aside>
);

export default sideNav;
