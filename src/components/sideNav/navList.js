import React from 'react';

const list = [
  {
    link: "#about",
    text: "About"
  },
  {
    link: "#resume",
    text: "Resume"
  },
  {
    link: "#portfolios",
    text: "Portfolios"
  },
  {
    link: "#contact",
    text: "Contact"
  },
]

const NavList = () => (
  list.map(item => (
    <li><a href={item.link}>{item.text}</a></li>
  ))
)

export default NavList;