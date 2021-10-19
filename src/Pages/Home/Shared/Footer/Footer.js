import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            
            <footer className="bg-dark text-center text-white footer"> 
                <div className="container p-4">
                    <section className="">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                               
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                <div className="col-md-5 col-12">
                                   
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example21" className="form-control" />
                                        <label className="form-label" htmlFor="form5Example21"></label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                   
                    <section className="mb-4">
                        <p>
                        A healthcare system can be defined as the method by which healthcare is financed, organized, and delivered to a population. It includes issues of access ...
                        </p>
                    </section>
                   
                    <section className="">
                       
                        <div className="row">
                           
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Home</h5>

                                {/* <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 4</a>
                                    </li>
                                </ul> */}
                            </div>
                           
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Department</h5>

                                {/* <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 4</a>
                                    </li>
                                </ul> */}
                            </div>
                            
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Doctors</h5>

                                {/* <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 4</a>
                                    </li>
                                </ul> */}
                            </div>
                          
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">News</h5>

                                {/* <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 4</a>
                                    </li>
                                </ul> */}
                            </div>
                           
                        </div>
                        
                    </section>
                   
                </div>
                
                <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                    © 2020 Copyright:
                    <Link className="text-white" to="#"> Medi-Heathcare
</Link>
                    
                </div>
               
            </footer>
            


        </div>
    );
};

export default Footer;