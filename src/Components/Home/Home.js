import React, {  } from 'react';
import Blogs from '../Blogs/Blogs';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';
import Header from './Header/Header';
import Navebar from './Navebar/Navebar';
import Contact from './../Contact/Contact';
import Footer from '../Footer/Footer';
import SubscribeBox from './../SubscribeBox/SubscribeBox';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Navebar/>
            <Header/>
            <Services/>
            <Skills/>
            <Projects/>
            <Blogs/>
            <Testimonials/>
            <Contact/>
            <SubscribeBox/>
            <Footer/>
        </div>
    );
};

export default Home;