import { NavLink } from 'react-router-dom';
import css from './HomeAuthNav.module.css';

const HomeAuthNav = () => {
  return (
    <div className={css.btnBox}>
      <button className={css.btn}>
        <NavLink to="/register">Register</NavLink>
      </button>
      <button className={css.btn}>
        <NavLink to="/login">Log In</NavLink>
      </button>
    </div>
  );
};

export default HomeAuthNav;
