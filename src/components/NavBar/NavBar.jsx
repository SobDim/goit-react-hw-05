import { Link, NavLink } from 'react-router-dom';
import s from './NavBar.module.css';
const NavBar = () => {
  return (
    <header>
      <ul className={s.wrapper}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="MoviesPage">MoviesPage</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
