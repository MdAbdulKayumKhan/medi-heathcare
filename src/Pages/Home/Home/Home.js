import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import Service from '../Service/Service';
import about02 from '../../../images/about/about-img.jpg';
import about04 from '../../../images/about/author-ava.png';

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
                                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br/>
                                    </div>
                                    <div className="about-author d-flex align-items-center">
                                        <div className="author-ava">
                                            <img src={about04} alt=""/>
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

            <Footer></Footer>

        </div>
    );
};

export default Home;