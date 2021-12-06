import React from 'react';

import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <header id="header">
            {/* Navbar */}
            <nav className="navbar navbar-expand">
                <div className="container header">
                    {/* Navbar Brand*/}
                    <Link className="navbar-brand" to="/">
                        <img className="navbar-brand-sticky" src="img/pp-removebg-preview.png" alt="sticky brand-logo" />
                    </Link>
                    <div className="ml-auto" />
                    {/* Navbar */}
                    <ul className="navbar-nav items mx-auto">
                        <li className="nav-item ">
                        <Link to="/" className="nav-link" >Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link">NFT <i className="fas fa-angle-down ml-1" /></a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><Link to="/octopusDapp" className="nav-link">Octopus</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/roadmap" className="nav-link">Roadmap</Link>
                        </li>
                        <li className="nav-item">
                            <a href="https://docs.google.com/document/d/1HJR1H3ASf_thx_BCjg3hNT893oDRlO9H/edit?usp=sharing&ouid=108796879882614269772&rtpof=true&sd=true" target="_blank" className="nav-link">Whitepaper</a>
                        </li>
                    </ul>
                    {/* Navbar Toggler */}
                    <ul className="navbar-nav toggle">
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="modal" data-target="#menu">
                                <i className="fas fa-bars toggle-icon m-0" />
                            </a>
                        </li>
                    </ul>
                
                </div>
            </nav>
        </header>
    );
};

export default Header;