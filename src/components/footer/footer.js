import React from 'react';

const Footer = () => {
    return (
        <div className = "site-footer">
            <h4 className = "text-center">
                All Stack
            </h4>
            <p className = "text-center">
                Follow us On Social Media
            </p>
            <div className = "footer-social-links">
                <ul className = "social-links-list">
                    <li>
                        <a href = "#" className = "facebook" target = "_blank" rel = "noopener noreferrer">
                        <i className="fab fa-facebook fa-3x"></i>
                        </a>
                    </li>
                    <li>
                        <a href = "#" className = "instagram" target = "_blank" rel = "noopener noreferrer">
                        <i className="fab fa-instagram fa-3x"></i>
                        </a>
                    </li>
                    <li>
                        <a href = "#" className = "twitter" target = "_blank" rel = "noopener noreferrer">
                        <i className="fab fa-twitter fa-3x"></i>
                        </a>
                    </li>
                    <li>
                        <a href = "#" className = "google" target = "_blank" rel = "noopener noreferrer">
                        <i className="fab fa-google fa-3x"></i>
                        </a>
                    </li>
                    <li>
                        <a href = "#" className = "linkedin" target = "_blank" rel = "noopener noreferrer">
                        <i className="fab fa-linkedin-in fa-3x"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <p className = "text-center">
                Created by Lunaticsatoshi Copyright 2020 All rights reserved 
            </p>
        </div>
    )
}

export default Footer;
