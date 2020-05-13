import React from "react";

const list = [
  {
    title: "Full Name",
    text: "Tetiana Rabiievska"
  },
  {
    title: "Age",
    text: "30"
  },
  {
    title: "Languages",
    text: "English (Professional working proficiency), German (Upper Intermediate), Ukrainian (Native), Russian (Native)"
  },
  {
    title: "Location",
    text: "Berlin, Germany"
  },
]

const AboutList = () => (
  list.map(item => (
    <li><b>{item.title}</b><span>{item.text}</span></li>
  ))
)


export default AboutList;