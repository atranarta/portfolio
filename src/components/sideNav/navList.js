import React from 'react';

import { NavLink } from "react-router-dom";

const list = [
  {
    key: 1,
    text: "About",
    link: "/"
  },
  {
    key: 2,
    text: "Technical skills",
    link: "skills"
  },
  {
    key: 3,
    text: "Portfolios",
    link: "portfolios"
  },
  {
    key: 4,
    text: "Contact",
    link: "contact"
  },
]

const NavList = () => (
  list.map(item => (
    <li >
      <NavLink exact to={item.link} key={item.key} activeClassName='active'>{item.text}</NavLink>
    </li>
  ))
)

export default NavList;