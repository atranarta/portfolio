import React from 'react';
import Portfolio from './portfolio';
import Title from './../title';

const Portfolios = () => (
  <div id="portfolios" className="component">
    <Title 
      text="Portfolios"
    />
    <div className="portfolios-wrap">
      <Portfolio />
    </div>
  </div>
);

export default Portfolios;