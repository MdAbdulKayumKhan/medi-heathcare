import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            
            <footer class="bg-dark text-center text-white footer"> 
                <div class="container p-4">
                    <section class="">
                        <form action="">
                            <div class="row d-flex justify-content-center">
                               
                                <div class="col-auto">
                                    <p class="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                <div class="col-md-5 col-12">
                                   
                                    <div class="form-outline form-white mb-4">
                                        <input type="email" id="form5Example21" class="form-control" />
                                        <label class="form-label" for="form5Example21"></label>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    
                                    <button type="submit" class="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                   
                    <section class="mb-4">
                        <p>
                        A healthcare system can be defined as the method by which healthcare is financed, organized, and delivered to a population. It includes issues of access ...
                        </p>
                    </section>
                   
                    <section class="">
                       
                        <div class="row">
                           
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Home</h5>

                                {/* <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 4</a>
                                    </li>
                                </ul> */}
                            </div>
                           
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Department</h5>

                                {/* <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 4</a>
                                    </li>
                                </ul> */}
                            </div>
                            
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Doctors</h5>

                                {/* <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 4</a>
                                    </li>
                                </ul> */}
                            </div>
                          
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">News</h5>

                                {/* <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 4</a>
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