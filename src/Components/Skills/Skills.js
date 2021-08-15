import React, {  } from 'react';
import SkillBar from 'react-skillbars';
import './Skills.css';
import skill from '../img/skill-photo.png'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const SKILLS = [
    {
      "type": "Java",
      "level": 100,
      "color": {
        "bar": "#3498db",
        "title": {
          "background": "#2980b9",
          "text": "black"
        }
      }
    },
    {
      "type": "React",
      "level": 85,
      "color": {
        "bar": "brown"
      }
    },
    {
      "type": "Javascript",
      "level": 75,
      "color": {
        "bar": "yellow"
      }
    },
    {
      "type": "Spring",
      "level": 50,
      "color": {
        "bar": "blue"
      }
    },
    {
      "type": "Docker",
      "level": 25,
      "color": {
        "bar": "orange"
      }
    },
    {
      "type": "HTML",
      "level": 80,
      "color": {
        "bar": "black"
      }
    },
    {
      "type": "NoSQL",
      "level": 50,
      "color": {
        "bar": "pink"
      }
    }
  ]

const Skills = () => {
    return (
        
      
      <div className="container mt-5">
        
        <h1 id="skills" className="service-font1 text-center">Skills</h1>
        <div className="row">
          <div className="img-align col-lg-6" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
         <img src={skill} alt=""/>
          </div>
        
          <div className="col-lg-6">
            
            
            <div className="skilAlign"  data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
            <SkillBar skills={SKILLS} height={15}></SkillBar>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Skills;