import React, { useState } from "react";
import Lotto_game from './../../img/projects/lotto-game.png';
import Restaurant_Finder from './../../img/projects/restaurant-finder.png';
import Weather_App from './../../img/projects/weather-app.png';
import LoupeIcon from './loupeIcon';
import LinkIcon from './linkIcon';
import Popup from './popup';

const projects = [
  {
    id: "lottoGame",
    img: Lotto_game,
    title: "Lotto Game",
    link: "https://lernwerkstatt-lottogame.azurewebsites.net",
    text: "Is a team project, in which I was mainly responsible for the design and layout developing. " +
    "For the implementation I used HTML, CSS and a bit of Javascript."
  },
  {
    id: "restaurant-finder",
    img: Restaurant_Finder,
    title: "Restaurant Finder",
    link: "https://priceless-galileo-680738.netlify.app",
    text: "This app helps to find and filter restaurants based on different requests. For example, " +
    "to find a middle-range Italian restaurant that is open now and also serves lactose-free dishes." +
    "In this project I learned to develop Apps with dynamic content by fetching the data from the API." +
    "Also I applied React Routing and used Redux. " +
    "I came up with all the design and styles myself. For the styling I used SCSS."
  },
  {
    id: "weatherApp",
    img: Weather_App,
    title: "Weather App",
    link: "https://tender-volhard-cf4f05.netlify.app/",
    text: "With this application, the weather can be seen in the user's current geolocation, or anywhere else " +
    "in the world. The background also changes depending on the data received." +
    "For developing this App I used React and SCSS, and all the weather data I received etching the data from the API."
  },
]

const Project = () => {
  const [id, setImageId] = useState(undefined);

  const projectItem = id ? projects.find(item => item.id === id) : undefined;

  return (projects.map(project => (
    <div className="projects-box">
      <div className="portfolio-image" >
        <img src={project.img} alt={project.title} />
        <ul>
          <li key={project.id} onClick={() => setImageId(project.id)}>
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
