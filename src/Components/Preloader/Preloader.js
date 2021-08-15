import React from 'react';
import './Preloader.css'

const Preloader = () => {
    return (
        <section className="preloader-container">
            <div className="preloader">
                <span className="light"></span>
                <span></span>
                <span></span>
                <span className="light"></span>
            </div>
        </section>
    );
};

export default Preloader;