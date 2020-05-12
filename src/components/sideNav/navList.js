import React from 'react';

import { Link } from "react-router-dom";

const list = [
  {
    link: "about",
    text: "About"
  },
  {
    link: "resume",
    text: "Resume"
  },
  {
    link: "portfolios",
    text: "Portfolios"
  },
  {
    link: "contact",
    text: "Contact"
  },
]

const NavList = () => (
  list.map(item => (
    <Link to="item.link">
      <li>{item.text}</li>
    </Link>
  ))
)

export default NavList;