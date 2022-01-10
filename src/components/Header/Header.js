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
                        <img className="navbar-brand-sticky" src="/img/pp-removebg-preview.png" alt="sticky brand-logo" />
                    </Link>
                    <div className="ml-auto"/>
                    {/* Navbar */}
                    <ul className="navbar-nav items mx-auto">
                        <li className="nav-item ">
                        <a href="/" className="nav-link" >Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link">NFT <i className="fas fa-angle-down ml-1" /></a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><a href="/octopusDapp" className="nav-link">Octopus</a></li>
                            </ul>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/roadmap" className="nav-link">Roadmap</Link>
                        </li> */}
                        <li className="nav-item">
                            <a href="/#team" className="nav-link">Team</a>
                        </li>
                        <li className="nav-item">
                            <a href="/#faq-area" className="nav-link">Faq</a>
                        </li>
                        <li className="nav-item">
                            <a href="/safeartclub" className="nav-link">SafeArt Club</a>
                        </li>
                    </ul>
                    {/* Navbar Toggler */}
                    <ul className="navbar-nav toggle">
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="modal" data-target="#menu">
                                <i className="fas fa-bars toggle-icon m-0"/>
                            </a>
                        </li>
                    </ul>
                
                </div>
            </nav>
        </header>
    );
};

export default Header;