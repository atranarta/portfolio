import React, { useState } from "react";
import Lotto_game from './../../img/portfolios/lotto-game.png';
import Calculator from './../../img/portfolios/calculator.png';
import ToDo_List from './../../img/portfolios/todo-list.png';
import LoupeIcon from './loupeIcon';
import LinkIcon from './linkIcon';
import Popup from './popup';

const portfolios = [
  {
    id: "lottoGame",
    img: Lotto_game,
    title: "Lotto Game",
    text: "A Lotto-game created using HTML, CSS and Javascript (by me and two more persons)"
  },
  {
    id: "calculator",
    img: Calculator,
    title: "Calculator",
    text: "A calculator created using React and SCSS"
  },
  {
    id: "toDoList",
    img: ToDo_List,
    title: "ToDo List",
    text: "A ToDo List created using React, Javascript and SCSS"
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
            <a rel="noopener noreferrer" target="_blank" href="/">
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
