import React from 'react';
import emailjs from 'emailjs-com';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import './Contact.css'

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const loading = toast.loading('Please wait...!');
        emailjs.send('service_hreowqs', 'template_1hcm98g', data, 'user_AgkG3WXfXfnkcy25zXfZM')
            .then((res) => {
                toast.dismiss(loading);
                if (res.text === "OK") {
                    reset();
                    return swal("Thank you!", "Your message was sent successfully.", "success");
                }
                swal("Sorry!", "Something went wrong. Please try again later", "error");
            }, (err) => {
                toast.dismiss(loading);
                swal("Sorry!", "Something went wrong. Please try again later", "error")
            });
    };
  return (
    <section className="contact-container  pb-5" id='contact'>
            <Container className="pt-5"> 
                    <h1 className="contact-font1 text-center">Get In Touch</h1>
                    <p className="contact-font2 row col-md-8 text-center m-auto">I'd Love to hear from you . Whether you have a question or just want to say hi, fell free to drop a message. I'll try my best to get back to you</p>
                    <div className="mt-4" data-aos="fade-up" data-aos-duration="3000">
                        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                            <Row>
                                <Col md="6">
                                    <div className="contact-group">
                                        <label >Your Name</label>
                                        <input type="text"  name="name" placeholder="Enter Your Name"  {...register("name", { required: true })} required />
                                    </div>

                                    <div className="contact-group"  >
                                        <label>Email</label>
                                        <input type="email" name="email" placeholder="Enter Your Email"  {...register("email", { required: true })} required />
                                    </div>

                                    <div className="contact-group">
                                        <label>Phone</label>
                                        <input type="phone" name="subject" placeholder="Enter Your Phone Number"  {...register("subject", { required: true })} required  />
                                    </div>  
                                </Col>

                                <Col md="6">
                                    <div className="contact-group">
                                        <label>Message</label>
                                        <textarea name="message" placeholder='Give me a mail'  {...register("message", { required: true })} required />
                                    </div>
                                </Col>
                                
                            </Row>
                            <div className="mt-3 text-center">
                            <button className='btn-hover color-2'>Send Message</button>
                            </div>
                        </form>
                    </div>
             </Container>
        </section>
  );
};

export default Contact;