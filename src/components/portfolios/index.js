import React from 'react';
import Portfolio from './portfolio';
import Title from './../title';

import { Switch, Route } from "react-router-dom";

const Portfolios = () => (
  <Switch>
    <Route path="/portfolios">
      <div className="component">
        <Title
          text="Portfolios"
        />
        <div className="portfolios-wrap">
          <Portfolio />
        </div>
      </div>
    </Route>
  </Switch>
);

export default Portfolios;