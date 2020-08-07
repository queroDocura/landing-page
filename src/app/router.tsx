import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LandingPage from '../pages/landing-page';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="*" component={() => <h1>404 Page Not Found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
