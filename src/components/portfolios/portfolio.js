import React, { useState } from "react";
import Lotto_game from './../../img/portfolios/lotto-game.png';
import Calculator from './../../img/portfolios/calculator.png';
import ToDo_List from './../../img/portfolios/todo-list.png';
import LoupeIcon from './loupeIcon';
import LinkIcon from './linkIcon';
import Popup from './popup';

const portfolios = [
  {
    img: Lotto_game,
    title: "Lotto Game",
    text: "A Lotto-game created using HTML, CSS and Javascript (by me and two more persons)"
  },
  {
    img: Calculator,
    title: "Calculator",
    text: "A calculator created using React and SCSS"
  },
  {
    img: ToDo_List,
    title: "ToDo List",
    text: "A ToDo List created using React, Javascript and SCSS"
  },
]

const Portfolio = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (portfolios.map(portfolio => (
    <div className="portfolios-box">
      <div className="potfolio-image">
        <img src={portfolio.img} alt={portfolio.title} />
        <ul>
          <li onClick={() => setShowPopup(!showPopup)}>
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
      {showPopup &&
        <Popup
          img={portfolio.img}
          imageTitle={portfolio.title}
          onClickFunk={() => setShowPopup(!showPopup)}
        />
      }
    </div>
  ))
  );
}

export default Portfolio;
