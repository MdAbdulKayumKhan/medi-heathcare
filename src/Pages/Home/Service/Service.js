import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, description, img} = service;
    return (
        
            
            <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="service-box text-center mb-30">
                    <div className="service-thumb">
                        <img src={img} alt="" />
                    </div>
                    <div className="service-content">
                        <h3><Link to="#">{name}</Link></h3>
                        <p>{description.slice(0, 90)}</p>
                        <Link to={`/news/${id}`}><Button variant="primary">Details</Button></Link>
                    </div>
                </div>
            </div>
        
    );
};

export default Service;