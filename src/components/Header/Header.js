import React from 'react';

const Header = () => {
    return (
        <header id="header">
            {/* Navbar */}
            <nav data-aos="zoom-out" data-aos-delay={800} className="navbar navbar-expand">
                <div className="container header">
                    {/* Navbar Brand*/}
                    <a className="navbar-brand" href="/">
                        <img className="navbar-brand-sticky" src="img/pp-removebg-preview.png" alt="sticky brand-logo" />
                    </a>
                    <div className="ml-auto" />
                    {/* Navbar */}
                    <ul className="navbar-nav items mx-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/roadmap" className="nav-link">Roadmap</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="/">NFT <i className="fas fa-angle-down ml-1" /></a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><a href="/mint-your-nft" className="nav-link">SafeArt</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="https://docs.google.com/document/d/1HJR1H3ASf_thx_BCjg3hNT893oDRlO9H/edit?usp=sharing&ouid=108796879882614269772&rtpof=true&sd=true" target="_blank" className="nav-link">Whitepaper</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="/">Community <i className="fas fa-angle-down ml-1" /></a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><a href="#staff" className="nav-link">Staff</a></li>
                            </ul>
                        </li>
                    </ul>
                    {/* Navbar Toggler */}
                    <ul className="navbar-nav toggle">
                        <li className="nav-item">
                            <a href="/" className="nav-link" data-toggle="modal" data-target="#menu">
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