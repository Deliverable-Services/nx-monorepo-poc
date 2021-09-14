import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';

import styles from './app.module.scss';
import { AuthLogin as Login } from '@cea/auth/login';

const userAccount = {
  email: 'dishant@cea.com',
  password: '123456',
};

export interface AuthForm {
  email: string;
  password: string;
}

export function App() {
  const [token, setToken] = useState<string | null>(null);

  const onLogin = (user: AuthForm) => {
    let response = {
      type: 'success',
      message: 'user logged-in',
    };

    if (user.email === userAccount.email) {
      if (user.password === userAccount.password) {
        setToken('123456');
      } else {
        response = {
          type: 'error',
          message: 'Wrong password',
        };
      }
    } else {
      response = {
        type: 'error',
        message: 'Wrong email',
      };
    }

    return response;
  };

  const clearToken = () => setToken(null);

  return (
    <div className={styles.app}>
      <button onClick={clearToken}>Clear token</button>

      <Route
        path="/auth"
        exact
        render={() => <Login onLogin={onLogin} token={token} />}
      />

      <Route
        path="/"
        exact
        render={() => (
          <div>
            Chapter 2: Libraries 20 This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
            <Link to="/auth">Login</Link>
          </div>
        )}
      />

      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
    </div>
  );
}

export default App;
