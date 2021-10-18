import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Home/Shared/Header/Header';

const Login = () => {
    const {singInUsingGoogle} = useAuth();
    return (
        <div>
            <Header></Header>
            <h2>this log in form</h2>
            <Button onClick={singInUsingGoogle} variant="warning">Login</Button>
        </div>
    );
};

export default Login;