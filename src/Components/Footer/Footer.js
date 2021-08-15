import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faHome, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { faComments, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer id="footer">

            <div className="container"  data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1500">

                <div className="row">

                    <div className="footer-box col-md-3 col-sm-6">

                        <h3 className="service-font1">ABOUT US</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, odit repudiandae? Unde doloremque nemo aperiam cupiditate nam laudantium voluptatem beatae!</p>

                        <div className="ficons">
                            <a href="/"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="/"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="/"><FontAwesomeIcon icon={faBehance} /></a>
                        </div>

                    </div>

                    <div className="footer-box col-md-3 col-sm-6">

                        <h3 className="service-font1">CONTACT US</h3>

                        <div className="contact-icon d-flex align-items-center mb-4">
                            <FontAwesomeIcon icon={faHome} />
                            <span> Comilla City, Comilla-3500, Bangladesh</span>
                        </div>

                        <div className="contact-icon d-flex align-items-center mb-4">
                            <FontAwesomeIcon icon={faPhone} />
                            <span> +880 1860842420 <br /> +880 1979772026</span>
                        </div>

                        <div className="contact-icon d-flex align-items-center mb-4">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span> todevarman@gmail.com <br /> todevarman@gmail.com</span>
                        </div>

                    </div>

                    <div className="footer-box col-md-3 col-sm-6">

                        <h3 className="service-font1">USEFUL LINKS</h3>

                        <ul> 
                            <li><Link to="/" ><FontAwesomeIcon icon={faChevronRight} />Home</Link></li>
                            <li><Link to="/" ><FontAwesomeIcon icon={faChevronRight} />Services</Link></li>
                            <li><Link to="/" ><FontAwesomeIcon icon={faChevronRight} />Skills</Link></li>
                            <li><Link to="/" ><FontAwesomeIcon icon={faChevronRight} />Projects</Link></li>
                            <li><Link to="/" ><FontAwesomeIcon icon={faChevronRight} />Blogs</Link></li>
                        </ul>

                    </div>

                    <div className="footer-box col-md-3 col-sm-6">
                        <h3 className="service-font1">RECENT CASES</h3>
                        <div className="fRpost">

                            <div className="fRpostMeta">
                                <span>15</span>
                                <p>APRIL 2021</p>
                            </div>

                            <div className="fRpostTitle">
                                <h3><Link to='/' >WHERE WE'RE STANDING RIGHT NOW</Link></h3>
                                <p><FontAwesomeIcon icon={faUser} />By Admin </p>
                                <p><FontAwesomeIcon icon={faComments} />35</p>
                            </div>

                        </div>

                        <div className="fRpost">
                            <div className="fRpostMeta">
                                <span>25</span>
                                <p>APRIL 2021</p>
                            </div>

                            <div className="fRpostTitle">
                                <h3><Link to='/' >AND MAYBE KNOWING ISN'T THE POINT</Link></h3>
                                <p><FontAwesomeIcon icon={faUser} />By Admin </p>
                                <p><FontAwesomeIcon icon={faComments} />30</p>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="copy-right-container">
                    <p>Copyright &copy; {new Date().getFullYear()}, All rights reserved Towhidul Islam Arman</p>
                </div>

            </div>
        </footer>

    );
};

export default Footer;