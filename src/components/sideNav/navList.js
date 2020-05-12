import React from 'react';

import { Link } from "react-router-dom";

const list = [
  {
    key: 1,
    text: "About",
    link: "/"
  },
  {
    key: 2,
    text: "Resume",
    link: "resume"
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
      <Link key={item.key} to={item.link}>{item.text}</Link>
    </li>
  ))
)

export default NavList;