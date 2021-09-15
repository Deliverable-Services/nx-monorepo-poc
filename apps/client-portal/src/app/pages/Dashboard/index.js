import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>This is dashboard.</h1>
      <br />
      <Link to="/auth">Login</Link>
      <br />
      <a href="/qa-service">Click here for QA Service</a>
      <br />
      <Link to="/qa-service/something">
        Click here for QA Service Something
      </Link>
    </div>
  );
};

export default Dashboard;
