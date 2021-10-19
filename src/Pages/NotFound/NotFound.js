import React from 'react';
import Footer from '../Home/Shared/Footer/Footer';
import Header from '../Home/Shared/Header/Header';
import page404 from '../../images/error-404-not-found.jpg';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <div class="row g-0 mx-5">
                <div class="col-sm-12 col-md-12 mt-5 mb-5 ">
                    <img className="img-fluid" src={page404} alt=""/>
                    <br/><br/>
                    <Link to="/"><Button type="submit" className="" variant="primary">GO Home</Button></Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;