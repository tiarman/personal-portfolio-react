import React from 'react';
import './Testimonials.css';
import wilson from '../img/avatar.png'
import ema from '../img/cityPrinting.png'
import aliza from '../img/img-bg-3.jpg'
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/components/pagination/pagination.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';


const testimonialData = [
    {
        quote : 'So good in developer amazing developer nice work',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, ! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]
const Testimonials = () => {
    SwiperCore.use([Pagination, Autoplay]);
    return (
        <section className="testimonials">
            <div className="container">
                <div className="section-title">
                    <h1 className="test-header mb-5">Testimonials</h1>
                </div>
            </div>
            <div className="mx-sm-5">
                    <Swiper
                        loop={true}
                        pagination={{ clickable: true }}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 2,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={50}
                    >

                        {
                            testimonialData.map(testimonial => {
                                return (
                                    <SwiperSlide>
                                       <div className="single-testimonial shadow">
            <img className="rounded-circle shadow" src={testimonial.img} alt="" width="100" height="100" />
            <h4 className="text-gradient">{testimonial.name}</h4>
            <h6 className="m-0">{testimonial.from}</h6>
            <div className="text-secondary mt-3">
                <p>{testimonial.quote.substr(1, 200)}</p>
            </div>
        </div>
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                </div>
        </section>
    );
};

export default Testimonials;