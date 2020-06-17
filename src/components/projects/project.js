import React, { useState } from "react";
import Lotto_game from './../../img/projects/lotto-game.png';
import Restaurant_Finder from './../../img/projects/restaurant-finder.png';
import ToDo_List from './../../img/projects/todo-list.png';
import LoupeIcon from './loupeIcon';
import LinkIcon from './linkIcon';
import Popup from './popup';

const projects = [
  {
    id: "lottoGame",
    img: Lotto_game,
    title: "Lotto Game",
    link: "https://lernwerkstatt-lottogame.azurewebsites.net",
    text: "In this project, I was mainly responsible for the design and layout developing. " +
    "For the implementation I used HTML, CSS and a bit of Javascript."
  },
  {
    id: "restaurant-finder",
    img: Restaurant_Finder,
    title: "Restaurant Finder",
    link: "https://priceless-galileo-680738.netlify.app",
    text: "In this project I learned to develop Apps with dynamic content by fetching the data from the API" +
    "Also I applied React Routing and used Redux. " +
    "I came up with all the design and styles myself. For the styling I used SCSS."
  },
  {
    id: "toDoList",
    img: ToDo_List,
    title: "ToDo List",
    text: "IN PROGRESS... A ToDo List created using React, Javascript and SCSS."
  },
]

const Project = () => {
  const [id, setImageId] = useState(undefined);

  const projectItem = id ? projects.find(item => item.id === id) : undefined;

  return (projects.map(project => (
    <div className="projects-box">
      <div className="potfolio-image">
        <img src={project.img} alt={project.title} />
        <ul>
          <li onClick={() => setImageId(project.id)}>
            <button>
              <LoupeIcon />
            </button>
          </li>
          <li>
            <a rel="noopener noreferrer" target="_blank" href={project.link}>
              <LinkIcon />
            </a>
          </li>
        </ul>
      </div>
      <h5>{project.title}</h5>
      <p>{project.text}</p>
      {projectItem &&
        <Popup
          onClick={() => setImageId(undefined)}
          alt={projectItem.title}
          image={projectItem.img}
        />
      }
    </div>
  ))
  );
}

export default Project;
