import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import sectionImg01 from '../../../images/section/section-back-icon.png';
import './Services.css';
import Service from '../Service/Service';

const Services = () => {
   const [services, setServices] = useState([]);
   useEffect(() =>{
       fetch('./generated.json')
       .then(res => res.json())
       .then(data => setServices(data));
   }, [])
    return (
        <div>
            <Header></Header>
                <section className="servcies-area gray-bg pt-115 pb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                                <div className="section-title text-center pos-rel mb-75">
                                    <div className="section-icon">
                                        <img className="section-back-icon" src={sectionImg01} alt=""/>
                                    </div>
                                    <div className="section-text pos-rel">
                                        <h5>Departments</h5>
                                        <h1>Managed Your Heathcare Services</h1>
                                    </div>
                                    <div className="section-line pos-rel">
                                        <img src="img/shape/section-title-line.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                services.map(service => <Service
                                key={service.id}
                                service={service}
                                ></Service>)
                            }
                        </div>
                    </div>
                </section>
            
        </div>
    );
};

export default Services;