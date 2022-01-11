import React, { Component } from 'react';

const initData = {
    pre_heading: "FAQ"
}

const data = [
    {
        id: "1",
        btnClass: "btn d-block text-left w-100 py-4",
        target: "#collapseOne",
        quote: "What are the benefits of owning one?",
        contentId: "collapseOne",
        contentClass: "collapse show",
        content: "The NFT holders will have several benefits, for instance anticipated sales, exclusive NFTs and soon they will also be rewarded with a community Token.  See the SafeArt Club page (link alla pagina) for more information."
    },
    {
        id: "2",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseTwo",
        quote: "Why Polygon?",
        contentId: "collapseTwo",
        contentClass: "collapse",
        content: "Ethereum gas fees are extremely volatile. The gas price sensibly increases when there is a high demand for resources on the Ethereum blockchain. Eventually upgrading to Ethereum 2.0 will massively reduce the transaction fees, making the network more usable. In the meantime, Polygon is a valid alternative to mint new NFTs, with lower fees and faster transaction speed."
    },
    {
        id: "3",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseThree",
        quote: "Is the art randomly assigned?",
        contentId: "collapseThree",
        contentClass: "collapse",
        content: "The NFTs are randomly assigned. Everyone has the same probability of getting a rare piece."
    },
    {
        id: "4",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseFour",
        quote: "How can I mint a NFT?",
        contentId: "collapseFour",
        contentClass: "collapse",
        content: "You only need to own a metamask wallet and to connect to our mint page. The smart contract will take care of the rest."
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