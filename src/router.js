import React from 'react';
import { Router, Route } from 'dva/router';
import logAndReg from './routes/regLand';
import homePage from './routes/homePage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={logAndReg} />
      <Route path="/home" component={homePage} />
    </Router>
  );
}

export default RouterConfig;
