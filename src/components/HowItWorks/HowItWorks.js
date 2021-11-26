import React, { Component } from 'react';

const initData = {
    pre_heading: "How it works",
    heading: "SafeArt",
    text: "Safeart.io is a new platform based on the release of NFT collections inspired by the history of art, but in a futuristic key, through the tokenization and digitization of works from the past. The safeart.io community utility token is used to provide liquidity to the project and to interact on the platform itself. We, the creators of safeart.io, strongly believe that the future of art is digital not only for new works, but also for those created by the greatest artists of the past, those who have made the greatest contribution to the history of art.",
    btnText: "View All",
    heading1: "Fair Distribution",
    text1: "We do not know what awaits us in the future, climate change is just one example of what is putting a strain on our species and all its artistic creations. It is our duty as human beings, therefore, to preserve and safeguard works of art by digitizing them and making them immortal on the blockchain."
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