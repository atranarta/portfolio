import React from 'react';
import Avatar from './../../img/avatar.jpeg';
import NavList from './navList';

import { Switch, Route } from "react-router-dom";


const sideNav = () => (
  <Switch>
    <Route path="/sideNav">
      <aside>
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
    </Route>
  </Switch>
);

export default sideNav;
