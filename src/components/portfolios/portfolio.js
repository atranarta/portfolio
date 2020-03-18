import React from "react";

const Portfolio = props => (
  <div className="portfolios-box">
    <div className="potfolio-image">
      <img src={props.img} alt={props.imageTitle} />
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
    <h5>{props.title}</h5>
    <p>{props.text}</p>
    <div className="popup">
      <img src={props.img} alt={props.imageTitle} />
    </div>
  </div>
);

export default Portfolio;
