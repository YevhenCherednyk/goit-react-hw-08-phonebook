import { NavLink } from 'react-router-dom';
// import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    // <div>
    //   <NavLink className={css.link} to="/register">
    //     Register
    //   </NavLink>
    //   <NavLink className={css.link} to="/login">
    //     Log In
    //   </NavLink>
    //   </div>

    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};

export default AuthNav
