import React from 'react';
import Portfolio from './portfolio'

const Portfolios = (props) => (
  <div id="portfolios" className="component">
    <div className="title">
      <h1>Portfolios</h1>
      <span>Portfolios</span>
    </div>
    <div className="portfolios-wrap">
      <Portfolio />
    </div>
  </div>
);

export default Portfolios;