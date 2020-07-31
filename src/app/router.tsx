import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <h1>Landing-page</h1>} />
        <Route exact path="/contato" component={() => <h1>Contact Page</h1>} />
        <Route path="*" component={() => <h1>404 Page Not Found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
