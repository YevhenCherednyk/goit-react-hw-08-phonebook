import { Helmet } from 'react-helmet';
import LoginForm from 'components/LoginForm';
import Footer from 'components/Footer';

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
      <Footer />;
    </div>
  );
};
export default Login;
