import React, { Component } from 'react';

const initData = {
    pre_heading: "How it works",
    // heading: "SafeArt",
    text: "Safeart.io is a platform that releases digital artworks and rewards the members of its community with exclusive sales and utility tokens that can be used for promotions, discounts, and further initiatives in the future.",
    text1: "As creators of SafeArt, we have a long experience in physical art and design and we strongly believe that the future of art is digital. Our mission is to collect high quality artworks coming from both new and more mature talented artists and create our own everlasting gallery on the blockchain. In our vision, art connects people. On a smaller scale, art can create an emotional relationship between the artist and the person who is looking at the art piece; on a larger scale, beyond the artist-spectator relationship, we hope to build a flourishing community around our art collections, where interesting ideas can be exchanged and new collections can be created. We hope you will enjoy it as much as we do!"
}


class HowItWorks extends Component {
    state = {
        initData: {}
    }
    componentDidMount(){
        this.setState({
            initData: initData
        })
    }
    render() {
        return (
            <section className="live-auctions-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>{this.state.initData.pre_heading}</span>
                                    <h1 className="mt-3 mb-0 ">{this.state.initData.heading}</h1>
                                    <p>{this.state.initData.text}</p>
                                </div>
                                <div className="intro-btn">
                                    {/* <a className="btn content-btn" href="/auctions">{this.state.initData.btnText}</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 my-5">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    {/* <span>{this.state.initData.pre_heading}</span> */}
                                    <h1 className="mt-3 mb-0">{this.state.initData.heading1}</h1>
                                    <p>{this.state.initData.text1}</p>
                                </div>
                                <div className="intro-btn">
                                    {/* <a className="btn content-btn" href="/auctions">{this.state.initData.btnText}</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HowItWorks;