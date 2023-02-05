import { Helmet } from 'react-helmet';
import RegisterForm from 'components/RegisterForm';
import Footer from 'components/Footer';

const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
      <Footer />;
    </div>
  );
};

export default Register;
