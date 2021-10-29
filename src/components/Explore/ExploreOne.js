import React, { Component } from 'react';

const initData = {
    pre_heading: "collection",
    // heading: "Roadmap",
    text: "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    btn_1: "View All",
    btn_2: "Load More"
}

const data = [
    {
        id: "1",
        img: "/img/auction_1.jpg",
        title: "Walking On Air",
        owner: "Richard",
        price: "1.5 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "2",
        img: "/img/auction_2.jpg",
        title: "Domain Names",
        owner: "John Deo",
        price: "2.7 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "3",
        img: "/img/auction_3.jpg",
        title: "Trading Cards",
        owner: "Arham",
        price: "2.3 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "4",
        img: "/img/auction_4.jpg",
        title: "Industrial Revolution",
        owner: "Yasmin",
        price: "1.8 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "5",
        img: "/img/auction_5.jpg",
        title: "Utility",
        owner: "Junaid",
        price: "1.7 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "6",
        img: "/img/auction_6.jpg",
        title: "Sports",
        owner: "ArtNox",
        price: "1.9 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "7",
        img: "/img/auction_7.jpg",
        title: "Cartoon Heroes",
        owner: "Junaid",
        price: "3.2 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "8",
        img: "/img/auction_8.jpg",
        title: "Gaming Chair",
        owner: "Johnson",
        price: "0.69 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "9",
        img: "/img/auction_9.jpg",
        title: "Photography",
        owner: "Sara",
        price: "2.3 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "10",
        img: "/img/auction_10.jpg",
        title: "Zed Run",
        owner: "SpaceMan",
        price: "3.7 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "11",
        img: "/img/auction_11.jpg",
        title: "Rare Tyres",
        owner: "Monas",
        price: "2.2 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "12",
        img: "/img/auction_12.jpg",
        title: "World of Women",
        owner: "Victor",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    }
]

class ExploreOne extends Component {
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
            <section className="live-auctions-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>{this.state.initData.pre_heading}</span>
                                    <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="auctions-slides">
                        <div className="swiper-container slider-mid items">
                            <div className="swiper-wrapper">
                                {/* Single Slide */}
                                {this.state.data.map((item, idx) => {
                                    return (
                                        <div key={`cd_${idx}`} className="col-12 col-sm-6 col-lg-3 item swiper-slide item">
                                        <div className="card no-hover text-center">
                                            <div className="image-over pt-3">
                                                <img className="card-img-top" src={item.img} alt="" />
                                            </div>
                                            {/* Card Caption */}
                                            <div className="card-caption col-12 p-0">
                                                {/* Card Body */}
                                                
                                            </div>
                                        </div>
                                    </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ExploreOne;