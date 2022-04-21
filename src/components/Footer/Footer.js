import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <footer className="footer-area position-relative">
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                                    <div className="social-icons d-flex">
                                        <a key="1" className="Discord" href="https://discord.gg/a6857DZXRK"target="_blank">
                                            <i className="fab fa-discord" />
                                            <i className="fab fa-discord" />
                                        </a>
                                        <a key="2" className="Discord" href="https://twitter.com/SafeArt_io"target="_blank">
                                            <i className="fab fa-twitter" />
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </div>
                            </div>
                            <div className="col-12 copyright-area">
                                <div className="d-flex flex-wrap justify-content-center justify-content-sm-center text-center py-4">
                                    <div className="">©2022 SafeArt, All Rights Reserved.</div>
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