import LoginForm from './components/Form';
import LoginHeader from './components/Header';
import LoginFooter from './components/Footer';

import styles from './index.module.scss';

const Login = () => {
    return (
        <div className={styles.container}>
            <LoginHeader />
            <LoginForm />

            <LoginFooter />
        </div>
    );
};

export default Login;
