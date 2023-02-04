import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks';
// import css from './Navigation.module.css';

const Navigation = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      {/* {isLoggedIn && (
        <NavLink className={css.link} to="/tasks">
          Tasks
        </NavLink>
      )} */}
    </nav>
  );
};

export default Navigation;
