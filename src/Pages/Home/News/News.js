import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const News = () => {
    const {serviceId} = useParams();
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('/generated.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    const serviceDetail = services.find(service => service.id == serviceId);
    // console.log(service.filter(srv => srv.id === serviceId));
    console.log(serviceDetail)
    return (
        <div>
            <Header></Header>
            <h1>Service Details</h1>
             <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="service-box text-center mb-30">
                    <div className="service-thumb">
                        <img src={serviceDetail?.img} alt="" />
                    </div>
                    <div className="service-content">
                        <h3><a href="#">{serviceDetail?.name}</a></h3>
                        <p>{serviceDetail?.description}</p>
                       
                    </div>
                </div>
            </div> 
            <Footer></Footer>
             
        </div>
    );
};

export default News;