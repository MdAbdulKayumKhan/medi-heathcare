import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import Service from '../Service/Service';
import about02 from '../../../images/about/about-img.jpg';
import about04 from '../../../images/about/author-ava.png';
import bgImg from '../../../images/banner/slider-bg-1.jpg';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./generated.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    let homeServices = services.slice(0, 6);
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <section className="servcies-area gray-bg pt-115 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                            <div className="section-title text-center pos-rel mb-75 h-100">
                                <div className="section-text pos-rel">
                                    <h5>Departments</h5>
                                    <h1>Managed Your Heathcare Services</h1>
                                </div>
                                <div className="section-line pos-rel">
                                    <img src="img/shape/section-title-line.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            homeServices.map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </div>
                </div>
            </section>
            <section>
                <div className="container px-4 mt-5 mb-5">
                    <div className="row gx-5">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="p-3 border bg-light">
                                <img className="img-fluid" src={about02} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="p-3 border bg-light">
                                <div className="about-right-side pt-55 mb-30">
                                    <div className="about-title mb-20">
                                        <h5>About Us</h5>
                                        <h1>Short Story About Medi-Heathcare Clinic.</h1>
                                    </div>
                                    <div className="about-text">
                                        <p>you are looking for healthcare without the headache, enjoy flexible access to medical and dental care when you need it with MyHealthcare Clinic.
                                            We make it faster, easier and more enjoyable for you to access healthcare. From same-day appointments to our high-quality service you can now access flexible healthcare that fits around your life.
                                            Find out how you can enjoy unlimited access to GP and Dental services with our membership plans.</p>
                                        <p>MyHealthcare Clinic is a doctor-led private healthcare business providing personalised Medical, Dental and Specialist medical care of the highest quality, all under one roof. We are open Monday to Saturday and offer same day appointments giving you unbeatable access to private care. Our highly competitive pay-as-you-go prices and unrivalled membership plans ensure we can meet every patient’s needs, whether you prefer one-off appointments or ongoing membership.</p><br />
                                    </div>
                                    <div className="about-author d-flex align-items-center">
                                        <div className="author-ava">
                                            <img src={about04} alt="" />
                                        </div>
                                        <div className="author-desination">
                                            <h4>Rosalina D. Williamson</h4>
                                            <h6>founder</h6>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fact-area fact-map primary-bg pos-rel pt-115 pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-10">
                        <div className="section-title pos-rel mb-45">
                            <div className="section-text section-text-white pos-rel">
                                <h5>We are available 24/7</h5>
                                <h1 className="white-color">We Always Ready For A Challenge.</h1>
                            </div>
                        </div>
                        <div className="section-button section-button-left mb-30">
                            <a data-animation="fadeInLeft" data-delay=".6s" href="#" className="btn btn-icon ml-0"><span>+</span>Make Appointment</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-lg-6 col-md-8">
                        <div className="cta-satisfied">
                            <div className="single-satisfied mb-50 bg-dark text-white p-2">
                                <h1>1M+</h1>
                                <h5> <i className="fas fa-user"></i> Satisfied Patients</h5>
                                <p >Every interaction you have with a patient is an opportunity to raise the level of satisfaction they feel. When you build compassionate, ....</p>
                            </div>
                            <div className="single-satisfied mb-50 bg-info text-white p-2 mt-2">
                                <h1>100+</h1>
                                <h5><i className="far fa-thumbs-up"></i> World Awards</h5>
                                <p >You'll already know if you're a winner. Your patients or customer are telling you. Now it's time for the rest of us to hear about it..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


            <Footer></Footer>

        </div>
    );
};

export default Home;