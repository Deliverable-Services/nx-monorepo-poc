import { BrowserRouter, Route, Link } from 'react-router-dom';
import * as ReactDOM from 'react-dom';

import { Feature as BookFeature } from '@cea/feature';
import App from './app/app';

ReactDOM.render(
  <BrowserRouter>
    <Route
      path="/"
      exact
      render={() => (
        <div>
          Chapter 2: Libraries 20 This is the generated root route.{' '}
          <Link to="/page-2">Click here for page 2.</Link>
          <Link to="/feature">Click here for feature.</Link>
        </div>
      )}
    />
    <Route path="/feature" component={BookFeature} />
    <Route
      path="/page-2"
      exact
      render={() => (
        <div>
          <Link to="/">Click here to go back to root page.</Link>
        </div>
      )}
    />
  </BrowserRouter>,
  document.getElementById('root')
);
