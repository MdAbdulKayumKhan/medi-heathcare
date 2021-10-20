import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const News = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
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


            <div class="card mb-3 mx-auto my-5 mb-5" style={{maxWidth: '540px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={serviceDetail?.img} class="img-fluid rounded-start pt-3" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{serviceDetail?.name}</h5>
                            <p class="card-text">{serviceDetail?.description}</p>
                            <p class="card-text"><small class="text-muted"></small></p>
                        </div>
                    </div>
                </div>
            </div>
          
            <Footer></Footer>

        </div>
    );
};

export default News;