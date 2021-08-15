import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../img/logo.svg"
import './Navebar.css'



const Navebar = () => {
  const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);



    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);
    return (
      <Navbar
            collapseOnSelect
            expand="lg"
            variant="light"
            fixed="top"
            className={(isSticky || isCollapsed) ? "shadow-sm bg-white py-2" : "py-4"}>

            <Navbar.Brand
                as={Link} to="/"
                className="ml-md-5"
                style={{ color: "#3a4256", fontSize: "1.55rem" }}>
                <img
                    alt="Logo"
                    src={logo}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                />{' '}
                <strong>Towhidul Islam</strong>
            </Navbar.Brand>

            <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'show' : null)} aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav" className={isCollapsed}>
                <Nav className="nave-align ml-auto"  data-aos="flip-left" data-aos-delay="200" data-aos-duration="1500" data-aos-easing="ease-in-out-cubic">
                    <Nav.Link as={Link} to="/" className="nav-seperate mr-md-5" onClick={() => window.scrollTo(500, 0)} active>Home</Nav.Link>
                    <Nav.Link
                        href="#services"
                        className="nav-seperate mr-md-5" active>
                        Services
                    </Nav.Link>
                    <Nav.Link
                        href="#skills"
                        className="nav-seperate mr-md-5" active>
                        Skills
                    </Nav.Link>
                    <Nav.Link
                        href="#projects"
                        className="nav-seperate mr-md-5" active>
                        Projects
                    </Nav.Link>
                    <Nav.Link
                        href="#blogs"
                        className="nav-seperate mr-md-5" active>
                        Blogs
                    </Nav.Link>
                    <Nav.Link
                        href="#contact"
                        className="nav-seperate mr-md-5" active>
                        Contact
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navebar;