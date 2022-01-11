import React, { Component } from 'react';

const initData = {
    pre_heading: "FAQ",
    // heading: "Frequently Asked Questions",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit."
}

const data = [
    {
        id: "1",
        btnClass: "btn d-block text-left w-100 py-4",
        target: "#collapseOne",
        quote: "What are the benefits of owning one?",
        contentId: "collapseOne",
        contentClass: "collapse show",
        content: "Each NFT hodler will be rewarded with the privilege of being included in the whitelist and participating in drops with additional NFTs never seen on the market and Token comunity."
    },
    {
        id: "2",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseTwo",
        quote: "Why Polygon?",
        contentId: "collapseTwo",
        contentClass: "collapse",
        content: "Ethereum gas fees fluctuate greatly. Massive spikes in the cost of gas occur during times of high demand for resources on the Ethereum blockchain. When cost is a factor, Polygon is the choice of chain to mint new NFTs. The Ethereum 2.0 upgrade will massively reduce these transaction fees eventually, and make the network more usable."
    },
    {
        id: "3",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseThree",
        quote: "Is the art randomly assigned?",
        contentId: "collapseThree",
        contentClass: "collapse",
        content: "Each of our works is randomly assigned. Even for mint, the possibility of finding a rare piece is equal for everyone."
    },
    {
        id: "4",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseFour",
        quote: "How can I mint this SafeArt?",
        contentId: "collapseFour",
        contentClass: "collapse",
        content: "Simply by owning a metamask wallet and connecting to our mint page and the smart contract will take care of the rest."
    },
    {
        id: "5",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseFive",
        quote: "Will I become an artist owning one?",
        contentId: "collapseFive",
        contentClass: "collapse",
        content: "Absolutely yes ;)"
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
            <section className="faq-area pt-0" id="faq-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-12">
                            {/* Intro */}
                            <div className="intro">
                                <span>{this.state.initData.pre_heading}</span>
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