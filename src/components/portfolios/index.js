import React from 'react';
import Portfolio from './portfolio'
import Lotto_game from './../../img/portfolios/lotto-game.png'
import Calculator from './../../img/portfolios/calculator.png'
import ToDo_List from './../../img/portfolios/todo-list.png'

const Portfolios = (props) => (
  <div id="portfolios" className="component">
    <div className="title">
      <h1>Portfolios</h1>
      <span>Portfolios</span>
    </div>
    <div className="portfolios-wrap">
      <Portfolio
        img={Lotto_game}
        imageTitle='Lotto Game'
        title='Lotto Game'
        text='A Lotto-game created using HTML, CSS and Javascript (by me and two more persons)'
      />
      <Portfolio
        img={Calculator}
        imageTitle='Calculator'
        title='Calculator'
        text='A calculator created using React and SCSS'
      />
      <Portfolio
        img={ToDo_List}
        imageTitle='ToDo List'
        title='ToDo List'
        text='A calculator created using React and SCSSA ToDo List created using React, Javascript and SCSS'
      />
    </div>
  </div>
);

export default Portfolios;