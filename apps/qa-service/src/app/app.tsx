import styles from './app.module.scss';

import { Route, Link } from 'react-router-dom';

export function App() {
  return (
    <div className={styles.app}>
      <h1>Welcome to qa-service!</h1>

      <Route
        path="/qa-service"
        exact
        component={() => (
          <div>
            <h1>QA</h1>
            <Link to="/">Click here to go back to Dashboard.</Link>
          </div>
        )}
      />

      <Route
        path="/qa-service/something"
        exact
        component={() => (
          <div>
            <h1>QA Something</h1>
            <Link to="/">Click here to go back to Dashboard.</Link>
          </div>
        )}
      />
    </div>
  );
}

export default App;
