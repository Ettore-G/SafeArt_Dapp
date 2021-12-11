import React, { Component } from 'react';

const initData = {
    itemImg: "/img/gif/image.gif",
    date: "2022-03-30",
    tab_1: "Description",
    tab_2: "Properties",
    tab_3: "Details",
    ownerImg: "./img/pp-removebg-preview.png",
    itemOwner: "SafeArt",
    created: "?? ?? 2021",
    title: "Octopus",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
    price_1: "0.5 ETH",
    count: "1 of 10000",
    highest_bid: "2.9 BNB",
    bid_count: "1 of 5",
    btnText: "Place a Bid"
}

class ItemDetails extends Component {
    state = {
        initData: {},
    }
    componentDidMount(){
        this.setState({
            initData: initData,
        })
    }
    render() {
        return (
            <section className="item-details-area mt-5">
                <div className="container mt-5">
                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-5">
                            <div className="item-info">
                                <div className="item-thumb text-center">
                                    <img src={this.state.initData.itemImg} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            {/* Content */}
                            <div className="content mt-5 mt-lg-0">
                                <h1 className="m-0">{this.state.initData.title}</h1>
                                <p>{this.state.initData.content}</p>
                                {/* Owner */}
                                <div className="owner d-flex align-items-center">
                                    <span>Owned By</span>
                                    <a className="owner-meta d-flex align-items-center ml-3">
                                        <img className="avatar-sm rounded-circle" src={this.state.initData.ownerImg} alt="" />
                                        <h6 className="ml-2">{this.state.initData.itemOwner}</h6>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ItemDetails;