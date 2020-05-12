import React from 'react';
import Avatar from './../../img/avatar.jpeg';
import NavList from './navList';

const sideNav = () => (
  <aside id="sideNav">
    <div className="heading">
      <div className="avatar-wrap">
        <img src={Avatar} className="avatar" alt="Tetiana Rabiievska" width="170px"></img>
      </div>
    </div>
    <nav>
      <ul>
        <NavList />
      </ul>
    </nav>
  </aside>
);

export default sideNav;
