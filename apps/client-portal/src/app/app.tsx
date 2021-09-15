import { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

import styles from './app.module.scss';
import { AuthLogin as Login } from '@cea/auth/login';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';

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

      <Redirect path="/" exact to="/dashboard" />

      <Route
        path="/auth"
        exact
        render={() => <Login onLogin={onLogin} token={token} />}
      />

      <PrivateRoute
        token={token}
        path="/dashboard"
        exact
        component={() => <Dashboard />}
      />
    </div>
  );
}

export default App;
