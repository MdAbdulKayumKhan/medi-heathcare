import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Home/Shared/Header/Header';

const Login = () => {
   
    const {singInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    // console.log(location?.state?.from)
    
    // const handleGoogleSingIn = () =>{
    //     singInUsingGoogle()
        
    // }
    return (
        <div>
            <Header></Header>
            <h2>this log in form</h2>
            <Button onClick={singInUsingGoogle} variant="warning">Login</Button>
        </div>
    );
};

export default Login;