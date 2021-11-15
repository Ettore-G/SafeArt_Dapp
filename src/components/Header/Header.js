import React from 'react';

import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <header id="header">
            {/* Navbar */}
            <nav data-aos="zoom-out" data-aos-delay={800} className="navbar navbar-expand">
                <div className="container header">
                    {/* Navbar Brand*/}
                    <Link className="navbar-brand" to="/">
                        <img className="navbar-brand-sticky" src="img/pp-removebg-preview.png" alt="sticky brand-logo" />
                    </Link>
                    <div className="ml-auto" />
                    {/* Navbar */}
                    <ul className="navbar-nav items mx-auto">
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to="/">NFT <i className="fas fa-angle-down ml-1" /></Link>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><Link to="/mint-your-nft" className="nav-link">SafeArt</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/roadmap" className="nav-link">Roadmap</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="https://docs.google.com/document/d/1HJR1H3ASf_thx_BCjg3hNT893oDRlO9H/edit?usp=sharing&ouid=108796879882614269772&rtpof=true&sd=true" target="_blank" className="nav-link">Whitepaper</Link>
                        </li>
                            <li className="nav-item"><Link to="#staff" className="nav-link">Staff</Link></li>
                    </ul>
                    {/* Navbar Toggler */}
                    <ul className="navbar-nav toggle">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" data-toggle="modal" data-target="#menu">
                                <i className="fas fa-bars toggle-icon m-0" />
                            </Link>
                        </li>
                    </ul>
                
                </div>
            </nav>
        </header>
    );
};

export default Header;