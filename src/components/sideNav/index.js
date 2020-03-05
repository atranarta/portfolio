import React from 'react';
import Avatar from './../../img/avatar.jpeg'

const sideNav = () => (
  <aside id="sideNav">
    <div className="heading">
      <div className="avatar-wrap">
        <img src={Avatar} className="avatar" alt="Tetiana Rabiievska" width="170px"></img>
      </div>
    </div>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Resume</a></li>
        <li><a href="/">Portfolios</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  </aside>
);

export default sideNav;
