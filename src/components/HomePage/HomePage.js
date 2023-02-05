import AuthNav from 'components/AuthNav';
import useAuth from 'hooks/useAuth';
import css from './HomePage.module.css';

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <section className="section">
      <div className={css.home}>
        <h1>Welcome to PhoneBook</h1>
        {!isLoggedIn && <AuthNav />}
      </div>
    </section>
  );
};

export default HomePage;
