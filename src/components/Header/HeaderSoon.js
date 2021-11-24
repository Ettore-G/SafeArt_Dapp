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