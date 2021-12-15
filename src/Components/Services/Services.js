import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Services.css'
import Bounce from 'react-reveal/Bounce';
import image from '../img/hero-img.png'

const Services = () => {
  const service = [
    {
        title: 'Web Design',
        description: 'I can design modern react app. Also design every kind of web application and web app for you.',
        imageUrl: '../img/CityRider.PNG'
    },
    {
        title: 'Web Development',
        description: 'I can developing all kind off application. I can manage all the sites are created by react.',
        imageUrl: '../img/CityRider.PNG'
    },
    {
        title: 'React Native Development',
        description: ' Using react native I can create android and IOS apps for you and your business.',
        imageUrl: '../img/CityRider.PNG'

    }
]
  return (
    <section className='news-container' id='services'>
            <Container className="service-font1 py-5">
              <h1 className="text-center">Services</h1>
              <Row className="mt-5">
                  {
                       service.map(serv => 
                        <Col md={4} className='p-2'>
            <div className="service-align blog-card">
                <Bounce bottom cascade>
                        <div>
                            <img src={image} alt={serv.title} className="img-fluid" />
                        </div>
                        <div className="p-4">
                            <h5 className="services-tittle">{serv.title}</h5>
                            <p className="service-description text-muted">{serv.description}</p>
                            
                        </div>
                 </Bounce>
            </div>
        </Col>
                        )
                  }
              </Row>
            </Container>
         </section>
  );
};

export default Services;