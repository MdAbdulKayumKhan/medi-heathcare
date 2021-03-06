import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
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
    const {user, errorCatch, resetPassword, singInUsingGoogle, cereatSinginWithEmailPassword, logInWithEmailPassword, setUserName } = useAuth();

    // if(user.email){
    //     window.location.replace('/');
    // }
    // here is redirect uri code
    const location = useLocation();
    // console.log(location.state?.from);
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    // const location = useLocation();
    // const history = useHistory();
    // const re_uri = location.state?.from || '/';
    // console.log(location.state?.from)
 
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
            processLogin(email, password)
            
        }
        else {
            // setUserName(name);
            registerNewUser(email, password);
        }


        console.log('register singed in form', email, password);
    }

    const processLogin = (email, password) => {
        logInWithEmailPassword(email, password)
        .then(result => {
            history.push(redirect_uri)
            // const user = result.user;
            // console.log(user);
            // setErrorCatch('');
            // window.location.reload();
          })
          .catch(error=>{
            setError(error.message)
        })
        
    }

    const registerNewUser = (email, password) => {
        cereatSinginWithEmailPassword(email, password)

    }

    setUserName(name);


    const handleResetPassword = (email) => {
        resetPassword(email);

    }
    const handleGoogleLogin = () =>{
        singInUsingGoogle()
        .then(result => {
            console.log(result.user);
            // setUser(result.user);
            history.push(redirect_uri);

        })
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
                                    {/* <div className="or-divide"><span>OR</span></div>
                                    <Button onClick={handleResetPassword} type="submit" className="w-100" variant="danger">Reset Password</Button> */}

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-5">
                <h2>Login with Google</h2>
                <Button onClick={handleGoogleLogin} variant="warning"><FontAwesomeIcon icon={faSignInAlt} />Google Sign In</Button>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Login;