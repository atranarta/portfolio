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
    text: "Skills",
    link: "skills"
  },
  {
    key: 3,
    text: "Projects",
    link: "projects"
  },
  {
    key: 4,
    text: "Contact",
    link: "contact"
  },
]

const NavList = () => (
  list.map(item => (
    <li key={item.key}>
      <NavLink exact to={item.link} key={item.key} activeClassName='active'>{item.text}</NavLink>
    </li>
  ))
)

export default NavList;