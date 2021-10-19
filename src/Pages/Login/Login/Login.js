import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Home/Shared/Footer/Footer';
import Header from '../../Home/Shared/Header/Header';
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const { errorCatch, resetPassword, singInUsingGoogle, cereatSinginWithEmailPassword, logInWithEmailPassword, setUserName } = useAuth();

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password should be 6 character length.');
            return;
        }
        if (!/(?=.*[a-z])/.test(password)) {
            setError('Password should contain at least one lower case');
            return;
        }
        if (isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password);
        }


        console.log('register singed in form', email, password);
    }

    const processLogin = (email, password) => {
        logInWithEmailPassword(email, password)


    }

    const registerNewUser = (email, password) => {
        cereatSinginWithEmailPassword(email, password)

    }

    setUserName(name);


    const handleResetPassword = (email) => {
        resetPassword(email);

    }
    return (
        <div>
            <Header></Header>
            <section className="login-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 mt-5">
                            <div className="basic-login">
                                <h3 className="text-center mb-60">{isLogin ? 'Login' : 'Register'} From Here</h3>
                                <h5 style={{ color: 'red' }}>{error} {errorCatch}</h5>
                                <form onSubmit={handleRegister}>
                                    {!isLogin && <div>
                                        <label htmlFor="name">Your Name <span>**</span></label>
                                        <input onBlur={handleNameChange} id="name" type="text" placeholder="Enter Your Name..." required />
                                    </div>
                                    }
                                    <label htmlFor="email">Email Address <span>**</span></label>
                                    <input onBlur={handleEmailChange} id="email" type="email" placeholder="Enter Username or Email address..." required />
                                    <label htmlFor="pass">Password <span>**</span></label>
                                    <input onBlur={handlePasswordChange} id="pass" type="password" placeholder="Enter password..." required />
                                    <div className="login-action mb-20 fix">
                                        <span className="log-rem f-left">
                                            <input onChange={toggleLogin} id="remember" type="checkbox" />
                                            <label htmlFor="remember">Already Register!</label>
                                        </span>
                                    </div>

                                    <Button type="submit" className="w-100" variant="primary">{isLogin ? 'Login' : 'Register'}</Button>
                                    <div className="or-divide"><span>OR</span></div>
                                    <Button onClick={handleResetPassword} className="w-100" variant="danger">Reset Password</Button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-5">
                <h2>Login with Google</h2>
                <Button onClick={singInUsingGoogle} variant="warning">Google Sign In</Button>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Login;