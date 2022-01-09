import React, { Component } from 'react';
import axios from 'axios';


class Footer extends Component {
    render() {
        return (
            <footer className="footer-area position-relative">
                
                {/* Footer Top */}
                <div className="footer-top">
                    <div className="container d-flex justify-content-center">
                                    
                            <div className="social-icons d-flex py-4">
                                <a key="1" className="Discord" href="https://discord.gg/a6857DZXRK"target="_blank">
                                    <i className="fab fa-discord" />
                                    <i className="fab fa-discord" />
                                </a>
                                <a key="2" className="Discord" href="https://twitter.com/SafeArt_io"target="_blank">
                                    <i className="fab fa-twitter" />
                                    <i className="fab fa-twitter" />
                                </a>
                                <a key="3" className="Discord" href="https://t.me/joinchat/EQoLdbAu0ThmYTVk"target="_blank">
                                    <i className="fab fa-telegram" />
                                    <i className="fab fa-telegram" />
                                </a>
                                <a key="4" className="Discord" href="https://www.reddit.com/r/SafeArt/" target="_blank">
                                    <i className="fab fa-reddit-alien"></i>
                                    <i className="fab fa-reddit-alien"></i>
                                </a>
                            </div>

                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Copyright Area */}
                                <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                                    {/* Copyright Left */}
                                    <div className="copyright-left ">©2021 SafeArt, All Rights Reserved.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;