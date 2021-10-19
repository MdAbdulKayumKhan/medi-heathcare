import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Shared/Header/Header';

const News = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState([]);
    useEffect(()=>{
        fetch('./generated.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    // const serviceDetail = service.filter(srv => srv.id === serviceId);
    // console.log(service.filter(srv => srv.id === serviceId));
    
    return (
        <div>
            <Header></Header>
            <h1>this news</h1>
            {/* <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="service-box text-center mb-30">
                    <div className="service-thumb">
                        <img src={serviceDetail[0]?.img} alt="" />
                    </div>
                    <div className="service-content">
                        <h3><a href="#">{serviceDetail[0]?.name}</a></h3>
                        <p>{serviceDetail[0]?.description.slice(0, 100)}</p>
                       
                    </div>
                </div>
            </div> */}
            
        </div>
    );
};

export default News;