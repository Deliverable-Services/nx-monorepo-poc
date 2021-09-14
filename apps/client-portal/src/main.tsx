import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom';

import App from './app/app';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
