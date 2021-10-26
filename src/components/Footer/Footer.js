import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-2/footer";

class Footer extends Component {
    state = {
        data: {},
        socialData: [],
        widgetData_1: [],
        widgetData_2: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    socialData: res.data.socialData,
                    widgetData_1: res.data.widgetData_1,
                    widgetData_2: res.data.widgetData_2
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <footer className="footer-area">
                {/* Footer Top */}
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center res-margin ">
                                {/* Footer Items */}
                                <div className="footer-items">
                                    {/* Logo */}
                                    <a className="navbar-brand" href="/">
                                        <img src="img/pp-removebg-preview.png" className="img-fluid ml-4 footer-icon" alt="logo" />
                                    </a>
                                    {/* Social Icons */}
                                    <div className="social-icons d-flex py-4">
                                        <a key="1" className="Discord" href="https://discord.gg/RaXvVfFD">
                                            <i className="fab fa-discord" />
                                            <i className="fab fa-discord" />
                                        </a>
                                        <a key="2" className="Discord" href="https://twitter.com/Safee_Art">
                                            <i className="fab fa-twitter" />
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a key="3" className="Discord" href="https://t.me/joinchat/EQoLdbAu0ThmYTVk">
                                            <i className="fab fa-telegram" />
                                            <i className="fab fa-telegram" />
                                        </a>
                                        <a key="4" className="Discord" href="https://www.reddit.com/r/SafeArt/">
                                            <i className="fab fa-reddit-alien"></i>
                                            <i className="fab fa-reddit-alien"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3 res-margin text-center">
                                {/* Footer Items */}
                                <div className="footer-items">
                                    {/* Footer Title */}
                                    <h4 className="footer-title">Useful Links</h4>
                                    <ul>
                                        <li key="1"><a href="/">Home</a></li>
                                        <li key="2"><a href="/roadmap">Roadmap</a></li>
                                        <li key="3"><a href="/explore-3">NFT</a></li>
                                        <li key="4"><a href="https://docs.google.com/document/d/1HJR1H3ASf_thx_BCjg3hNT893oDRlO9H/edit?usp=sharing&ouid=108796879882614269772&rtpof=true&sd=true">Whitepaper</a></li>
                                        <li key="5"><a href="/contact">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3 res-margin text-center">
                                {/* Footer Items */}
                                <div className="footer-items">
                                    {/* Footer Title */}
                                    <h4 className="footer-title">{this.state.data.widget_2}</h4>
                                    <ul>
                                        <li key="1"><a href="/news">News</a></li>    
                                        <li key="2"><a href="/">Staff</a></li>                                      
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                {/* Footer Items */}
                                <div className="footer-items">
                                    {/* Footer Title */}
                                    <h4 className="footer-title text-center">{this.state.data.widget_3}</h4>
                                    {/* Subscribe Form */}
                                    <div className="subscribe-form  d-flex align-items-center">
                                        <input type="email" className="form-control" placeholder="info@yourmail.com" />
                                        <button type="submit" className="btn"><i className="icon-paper-plane" /></button>
                                    </div>
                                </div>
                            </div>
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
                                    <div className="copyright-left">©2021 SafeArt, All Rights Reserved.</div>
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