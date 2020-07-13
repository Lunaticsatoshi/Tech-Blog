import React, { useState } from 'react';
import { Link } from 'gatsby';
import onClickOutside from 'react-onclickoutside';
import logo from '../../images/logo.svg';

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    NavBar.handleClickOutside = () => setIsOpen(false)

    return (
        <div>
            <div className={isOpen ? "overlay menu-open" : "overlay"}></div>
            <div className="container">
                <div className="hamburger" onClick={toggle}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <nav className={isOpen ? "menu-open" : ""}>
                    <a className="nav_item--left" href="/">
                        <img src={logo} alt="Blog Logo" className="logo"></img>
                    </a>
                    <ul>
                        <li>
                            <Link className={window.location.href.indexOf('blog') > 0 ? 'link active' : 'link'}
                                to='/blog'>Blogs</Link>
                        </li>
                        <li>
                            <Link className={window.location.href.indexOf('projects') > 0 ? 'link active' : 'link'}
                                to='/projects'>Projects</Link>
                        </li>
                        <li>
                            <Link className={window.location.href.indexOf('about') > 0 ? 'link active' : 'link'}
                                to='/about'>About</Link>
                        </li>
                        <li>
                            <Link className={window.location.href.indexOf('contact') > 0 ? 'link active' : 'link'}
                                to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

const clickOutsideConfig = {
    handleClickOutside: () => NavBar.handleClickOutside
}

export default onClickOutside(NavBar, clickOutsideConfig);