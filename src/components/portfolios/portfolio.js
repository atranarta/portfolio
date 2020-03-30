import React from "react";
import Lotto_game from './../../img/portfolios/lotto-game.png'
import Calculator from './../../img/portfolios/calculator.png'
import ToDo_List from './../../img/portfolios/todo-list.png'

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
    text: "A calculator created using React and SCSS ToDo List created using React, Javascript and SCSS"
  },
]

const Portfolio = () => (
  portfolios.map(portfolio => (
    <div className="portfolios-box">
      <div className="potfolio-image">
        <img src={portfolio.img} alt={portfolio.title} />
        <ul>
          <li>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            </button>
          </li>
          <li>
            <a rel="noopener noreferrer" target="_blank" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a>
          </li>
        </ul>
      </div>
      <h5>{portfolio.title}</h5>
      <p>{portfolio.text}</p>
      <div className="popup">
        <img src={portfolio.img} alt={portfolio.imageTitle} />
      </div>
    </div>
  ))
);

export default Portfolio;
