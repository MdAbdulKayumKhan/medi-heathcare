import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import sectionImg01 from '../../../images/section/section-back-icon.png';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
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
                                    <img className="section-back-icon img-fluid" src={sectionImg01} alt="" />
                                </div>
                                <div className="section-text pos-rel">
                                    <h5>Our Team</h5>
                                    <h1>A Professional & Care Provider</h1>
                                </div>
                                <div className="section-line pos-rel">
                                    <img src="img/shape/section-title-line.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            doctors.map(doctor => (
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="service-box text-center mb-30">
                                        <div className="service-thumb">
                                            <img className="img-fluid" src={doctor.img} alt="" />
                                        </div>
                                        <div className="service-content">
                                            <h3><Link to="#">{doctor.name}</Link></h3>
                                            <p>{doctor.description.slice(0, 80)}</p>
                                            <Link to={`/news/${doctor.id}`}><Button variant="primary">Details</Button></Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Doctors;