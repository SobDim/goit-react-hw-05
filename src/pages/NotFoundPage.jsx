import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container">
      <h1>No Found</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
