import styles from './app.module.scss';
import { Link } from 'react-router-dom';

export function App() {
  return (
    <div className={styles.app}>
      <h1>Main App</h1>

      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/feature">BooksFeature</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
