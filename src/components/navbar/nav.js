import React, { useState } from 'react';
import { link, Link } from 'gatsby';
import onClickOutside from 'react-onclickoutside';
import { window } from 'browser-monads'
import logo from '../../images/logo.svg';
import './nav.css'

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    Nav.handleClickOutside = () => setIsOpen(false)
    

    return (
        <nav className="navbar">
            <div className="brand-title">
                <a className="nav_item--left" href="/">
                    <img src={logo} alt="Blog Logo" className="nav_item--logo"></img>
                </a>
            </div>
            <div className = "hamburger" onClick = {toggle}>
                <span className = "bar"></span>
                <span className = "bar"></span>
                <span className = "bar"></span>
            </div>
            <div className= {isOpen ? "navbar-links -active" : "navbar-links"}>
                <ul>
                    <li>
                        <Link className={window.location.href.indexOf('about') > 0 ? 'nav_item--link active' : 'nav_item--link'}
                            to='/about'>About</Link>
                    </li>
                    <li>
                        <Link className={window.location.href.indexOf('tags') > 0 ? 'nav_item--link active' : 'nav_item--link'}
                            to='/tags'>Tags</Link>
                    </li>
                    <li>
                        <Link className={window.location.href.indexOf('projects') > 0 ? 'nav_item--link active' : 'nav_item--link'}
                            to='/projects'>Projects</Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
};

const clickOutsideConfig = {
    handleClickOutside: () => Nav.handleClickOutside
}

export default onClickOutside(Nav, clickOutsideConfig);
