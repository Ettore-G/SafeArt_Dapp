import React, { Component } from 'react';

const initData = {
    pre_heading: "How it works",
    heading: "SafeArt",
    text: "10,000 SafeArt of the metaverse of the Ethereum blockchain. The SafeArt community accepts all shapes, sizes and cultures. Join on a quest filled with cow tipping rewards and adventures!",
    btnText: "View All",
    heading1: "Fair Distribution",
    text1: "There are no bonding curves here. Buying a SafeArt costs 0.055 ETH. There are no price tiers; SafeArt membership costs the same for everyone."
}

const data = [
    {
        id: "1",
        img: "/img/auction_1.jpg",
        date: "2021-12-09",
        title: "Virtual Worlds",
        seller_thumb: "/img/avatar_1.jpg",
        seller: "@Richard",
        price: "1.5 BNB",
        count: "1 of 1"
    },
    {
        id: "2",
        img: "/img/auction_2.jpg",
        date: "2021-10-05",
        title: "Collectibles",
        seller_thumb: "/img/avatar_2.jpg",
        seller: "@JohnDeo",
        price: "2.7 BNB",
        count: "1 of 1"
    },
    {
        id: "3",
        img: "/img/auction_3.jpg",
        date: "2021-09-15",
        title: "Arts",
        seller_thumb: "/img/avatar_3.jpg",
        seller: "@MKHblots",
        price: "2.3 BNB",
        count: "1 of 1"
    },
    {
        id: "4",
        img: "/img/auction_4.jpg",
        date: "2021-12-29",
        title: "Robotic Arts",
        seller_thumb: "/img/avatar_4.jpg",
        seller: "@RioArham",
        price: "1.8 BNB",
        count: "1 of 1"
    },
    {
        id: "5",
        img: "/img/auction_5.jpg",
        date: "2022-01-24",
        title: "Design Illusions",
        seller_thumb: "/img/avatar_5.jpg",
        seller: "@ArtNox",
        price: "1.7 BNB",
        count: "1 of 1"
    },
    {
        id: "6",
        img: "/img/auction_6.jpg",
        date: "2022-03-30",
        title: "Photography",
        seller_thumb: "/img/avatar_6.jpg",
        seller: "@Junaid",
        price: "3.5 BNB",
        count: "1 of 1"
    }
]

class AuctionsOne extends Component {
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

export default AuctionsOne;