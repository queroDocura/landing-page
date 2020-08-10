import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LandingPage from '../pages/landing-page';
import Contact from '../pages/contact';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/contato" component={Contact} />
        <Route path="*" component={() => <h1>404 Page Not Found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
