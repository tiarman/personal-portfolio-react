import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import { Button, Card, Col } from 'react-bootstrap';
import { faCloud, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import carRental from '../img/car-rental.PNG';
import powerGym from '../img/powerGym.PNG';
import soccerTem from '../img/soccerTeam.PNG';
import cityPrinting from '../img/cityPrinting.png';
import cityRider from '../img/CityRider.PNG';
import portfolio from '../img/portfolio.PNG';
import './Projects.css';
import '../Services/bootstrap/css/bootstrap.min.css'
import  Fade  from 'react-reveal/Fade';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  const project = [
    {
        title: 'Car Rental',
        using: 'React, BootStrap, FireBase, React Router, MongoDB',
        imageUrl: carRental,
        visit: 'https://unruffled-shannon-077751.netlify.app/',
        github: 'https://github.com/tiarman/Car-Rental',
        serverSite: 'https://github.com/tiarman/car-rental-serverss'
    },
    {
        title: 'Power Gym',
        using: 'React, BootStrap, FireBase, React Router, MongoDB',
        description: 'Superior Double Rooms are perfectly equipped for traveling couples or friends.',
        imageUrl: powerGym,
        visit: 'https://auth-recap-9df75.web.app/',
        github: 'https://github.com/Porgramming-Hero-web-course/full-stack-client-tiarman',
        
    },
    {
        title: 'Soccer Team',
        using: 'React, BootStrap, React Router',
        description: ' Have lots of in-room facilities and are designed in open-concept living area.',
        imageUrl: soccerTem,
        visit: 'https://pedantic-heisenberg-627f6b.netlify.app/',
        github: 'https://github.com/Porgramming-Hero-web-course/react-auth-tiarman',
        

    },
    {
      title: 'City Printing',
      using: 'React, BootStrap, FireBase, React Router, MongoDB',
      description: ' Have lots of in-room facilities and are designed in open-concept living area.',
      imageUrl: cityPrinting,
      visit: 'https://naughty-montalcini-f019e7.netlify.app/',
      github: 'https://github.com/Porgramming-Hero-web-course/full-stack-client-tiarman',
      serverSite: 'https://github.com/Porgramming-Hero-web-course/full-stack-server-tiarman',
      

  },
  {
    title: 'City Rider',
    using: 'React, BootStrap, FireBase, React Router, MongoDB',
    description: ' Have lots of in-room facilities and are designed in open-concept living area.',
    imageUrl: cityRider,
    visit: 'https://loving-hypatia-e79067.netlify.app/',
    github: 'https://github.com/Porgramming-Hero-web-course/react-auth-tiarman',
    serverSite: 'https://github.com/Porgramming-Hero-web-course/full-stack-server-tiarman',
    

},
{
  title: 'Personal Portfolio',
  using: 'React, BootStrap, FireBase, React Router',
  description: ' Have lots of in-room facilities and are designed in open-concept living area.',
  imageUrl: portfolio,
  visit: 'https://port-folio-d151e.web.app/',
  

}
]
  return (
    <section id="projects" className="container mt-5">
      <h1 className="service-font1 text-center">Projects</h1>
    
    <div className="row">
      {
        project.map(proj => 
          <Col lg={4} md={6} className="mt-5">
             <motion.div  drag dragConstraints={{left:0, top:0, right:0, bottom:0}} dragElastic={0.5}>
                <Card className="cardAlign border-0 p-3 container card-container ">
                    <Fade left>
                        <img className='img-fluid' src={proj.imageUrl}  alt={proj.title}/>
                            <Card.Body>
                                <Card.Title as="h4" className="title-align">{proj.title}</Card.Title>
                                <h6 className="using-align">{proj.using}</h6>
                            </Card.Body>  
                            
                            <Card.Footer className='d-flex justify-content-between align-items-center border-0'>
                            <a href={proj.imageUrl}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></a>
                                <a href={proj.github}><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                                <a href={proj.serverSite}><FontAwesomeIcon icon={faCloud}></FontAwesomeIcon></a>
                                <Button href={proj.visit}  variant='info' className="main-button"><FontAwesomeIcon icon={faEye}  />  Visit</Button>            
                            </Card.Footer>
                        </Fade>
                    </Card>
             </motion.div>
        </Col>
          
          )
      }
    </div>
    </section>
  );
};

export default Projects;