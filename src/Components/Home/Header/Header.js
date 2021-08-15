import React from "react";
import ParticlesBackgrounds from "../../Particles/ParticleBackground";
import "./Header.css";
import Typewriter from "typewriter-effect";
import { Button } from "react-bootstrap";
import { faDribbble, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPhone } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const hed = [
    {
      phone: '01979772026',
        download: 'https://drive.google.com/file/d/1B0ucNyMrUIPFCVgmzggwSBDXAlKttuXt/view?usp=sharing',
        
    },
  ]
  return (
    <div className="container">
      <div className="particl">
        <ParticlesBackgrounds />
      </div>
     
      <div className="headerfit">
     
        <section class="about-sec mt-180 mt-sm-120  mb-30"  data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1500">
        
          <div class="row">
            <div class="col-lg-12">
              <div class="mdl-card mdl-shadow--2dp">
                <div class="row">
                  
                  <div class="col-md-7 col-xs-12">
                    <div class="info-wrap">
                      <h1 className="header-font">MD.Towhidul Islam</h1>
                      <div class="header-font2 mt-20">
                        <Typewriter
                          options={{
                            strings: ["Full Stack Developer & React Developer"],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </div>
                      <br/>
                      {
                        hed.map(he =>
                      <div class="buttons">
                        <Button href={he.phone} className="btn-hover color-2"><FontAwesomeIcon icon={faPhone}  />  Contact</Button>
                        <Button href={he.download} className="btn-hover color-2"><FontAwesomeIcon icon={faEye}  />  Download CV</Button>
                      </div>
                      )
                      }
                    </div>
                    <ul class="head-font3 profile-wrap mt-3">
                    <div className="row">
                      <div className="col-lg-4">
                        <h5>Address</h5>
                        <h5>E-mail</h5>
                        <h5>Phone</h5>
                        <h5>Freelance</h5>
                      </div>
                      <div className="col-lg-8">

                        <h5>Cumilla Sadar Dakshin PO:3500</h5>
                        <h5>todevarman@gmail.com</h5>
                        <h5>+8801979772026</h5>
                        <h5>Available</h5>
                      </div>
                      </div>
                    </ul>
                    
                  </div>
                  <div class="col-md-5 col-xs-12 mb-30">
                    <div class="candidate-img mb-35"></div>
          
                    <ul class="social-icons mt-5">
                      <div className="row">
                        <div className="social-align justify-content-between col-lg-8 col-sm-8">
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faDribbble} />
                        <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        
                      </div>
                    </ul>
          
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </section>
        
      </div>
     
    </div>
  );
};

export default Header;
