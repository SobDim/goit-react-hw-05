import { Link, Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const Layout = () => {
  return (
    <div className="container">
      <NavBar />
      <section className="outlet">
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
