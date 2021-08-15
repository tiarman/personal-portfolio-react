import React from 'react';
import './SubscribeBox.css'
import { faBehance, faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SubscribeBox = () => {
    return (
        <section id="subscribe">

            <div className="container">
                <div className="sub-box row subscribe-container"  data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1500">

                    <div className="sub-box-single col-md-4 pb-4">
                        <h2 className="service-font1">SUBSCRIBE NOW</h2>
                        <div className="sub-input-box">
                            <input type="text" placeholder="Enter Your E-mail" />
                            <input id="sub-submit" type="submit" value="Submit" />
                        </div>
                    </div>

                    <div className="sub-box-single col-md-4 pb-4">

                        <h2 className="service-font1">CONTACTS NOW</h2>
                        <p>Call Us : +880 1979772026</p>
                        <p>Email Us : todevarman@gmail.com</p>

                    </div>

                    <div className="sub-box-single col-md-4 pb-4">
                        <h2 className="service-font1">FOLLOW ME</h2>
                        <div className="sub-fllow-icon">
                            <a href="/"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="/"><FontAwesomeIcon icon={faTwitter}/></a>
                            <a href="https://www.linkedin.com/in/towhidul-islam-arman/"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="/"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="/"><FontAwesomeIcon icon={faBehance}/></a>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default SubscribeBox;