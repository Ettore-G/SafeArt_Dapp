import React, { Component } from 'react';

const initData = {
    pre_heading: "FAQ",
    heading: "Frequently Asked Questions",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit."
}

const data = [
    {
        id: "1",
        btnClass: "btn d-block text-left w-100 py-4",
        target: "#collapseOne",
        quote: "What are the benefits of owning one??",
        contentId: "collapseOne",
        contentClass: "collapse show",
        content: "Each NFT hodler will be rewarded with the privilege of being included in the whitelist and participating in drops with additional NFTs never seen on the market and Token comunity. This reward will be given every month."
    },
    {
        id: "2",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseTwo",
        quote: "Where can I see transaction of wallet's comunity?",
        contentId: "collapseTwo",
        contentClass: "collapse",
        content: "The comunity wallet transactions can be viewed at the following etherscan link: "
    },
    {
        id: "3",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseThree",
        quote: "Is the art randomly generated",
        contentId: "collapseThree",
        contentClass: "collapse",
        content: "Each of our works is randomly generated, even for mint, the possibility of finding a rare piece is equal for everyone."
    },
    {
        id: "4",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseFour",
        quote: "How can I mint this SafeArt!?",
        contentId: "collapseFour",
        contentClass: "collapse",
        content: "Simply by owning a metamask wallet and connecting to our mint page, the smart contract will take care of the rest."
    },
    {
        id: "5",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseFive",
        quote: "How much will it cost to mint?",
        contentId: "collapseFive",
        contentClass: "collapse",
        content: "It will cost 0.055 ETH + FEE."
    }
]

class Faq extends Component {
    state = {
        initData: {},
        data: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: data
        })
    }
    render() {
        return (
            <section className="faq-area pt-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center">
                                <span>{this.state.initData.pre_heading}</span>
                                <h1 className="mt-3 mb-0">{this.state.initData.heading} </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            {/* FAQ Content */}
                            <div className="faq-content">
                                {/* Netstorm Accordion */}
                                <div className="accordion" id="netstorm-accordion">
                                    <div className="row justify-content-center">
                                        <div className="col-12 col-md-10">
                                            {/* Single Accordion Item */}
                                            {this.state.data.map((item, idx) => {
                                                return (
                                                    <div key={`fd_${idx}`} className="single-accordion-item p-2">
                                                        {/* Card Header */}
                                                        <div className="card-header bg-inherit border-0 p-0">
                                                            <h2 className="m-0">
                                                                <button className={item.btnClass} type="button" data-toggle="collapse" data-target={item.target}>
                                                                    {item.quote}
                                                                </button>
                                                            </h2>
                                                        </div>
                                                        <div id={item.contentId} className={item.contentClass} data-parent="#netstorm-accordion">
                                                            {/* Card Body */}
                                                            <div className="card-body py-3">
                                                                {item.content}
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Faq;