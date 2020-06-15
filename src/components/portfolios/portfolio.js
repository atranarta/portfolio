import React, { useState } from "react";
import Lotto_game from './../../img/portfolios/lotto-game.png';
import Restaurant_Finder from './../../img/portfolios/restaurant-finder.png';
import ToDo_List from './../../img/portfolios/todo-list.png';
import LoupeIcon from './loupeIcon';
import LinkIcon from './linkIcon';
import Popup from './popup';

const portfolios = [
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

const Portfolio = () => {
  const [id, setImageId] = useState(undefined);

  const portfolioItem = id ? portfolios.find(item => item.id === id) : undefined;

  return (portfolios.map(portfolio => (
    <div className="portfolios-box">
      <div className="potfolio-image">
        <img src={portfolio.img} alt={portfolio.title} />
        <ul>
          <li onClick={() => setImageId(portfolio.id)}>
            <button>
              <LoupeIcon />
            </button>
          </li>
          <li>
            <a rel="noopener noreferrer" target="_blank" href={portfolio.link}>
              <LinkIcon />
            </a>
          </li>
        </ul>
      </div>
      <h5>{portfolio.title}</h5>
      <p>{portfolio.text}</p>
      {portfolioItem &&
        <Popup
          onClick={() => setImageId(undefined)}
          alt={portfolioItem.title}
          image={portfolioItem.img}
        />
      }
    </div>
  ))
  );
}

export default Portfolio;
