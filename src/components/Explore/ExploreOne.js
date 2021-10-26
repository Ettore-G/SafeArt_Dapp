import React, { Component } from 'react';

const initData = {
    pre_heading: "roadmap",
    heading: "Roadmap",
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
            <section className="explore-area load-more p-0">
                <div className="container">
                    <div id="roadmap"className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>{this.state.initData.pre_heading}</span>
                                    <h1 className="mt-3 mb-0">{this.state.initData.heading}</h1>
                                    <p>{this.state.initData.text}</p>
                                </div>
                                <div className="intro-btn">
                                    <a className="btn content-btn" href="/roadmap">{this.state.initData.btn_1}</a>
                                </div>
                            </div>
                        </div>
                    <div class="col-12 p-0">    
                        <div class="container py-5 text-center">
                            <div class="main-timeline-4 text-white ">
                                <div class="timeline-4 left-4 ">
                                    <div class="card gradient-custom ">
                                        <div class="card-body p-0">
                                            <i class="fab fa-artstation fa-2x mb-3"></i>
                                            <h4>25 %</h4>
                                            {/* <p class="small text-white-50 mb-4">May 21</p> */}
                                            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto
                                                mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim
                                                per, habeo iusto primis ea eam.
                                            </p>
                                            {/* <h6 class="badge bg-light text-black mb-0">New</h6>
                                            <h6 class="badge bg-light text-black mb-0">Admin</h6> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="timeline-4 right-4">
                                    <div class="card gradient-custom-4">
                                        <div class="card-body p-0">
                                            <i class="fas fa-paint-roller fa-2x mb-3"></i>
                                            <h4>50 %</h4>
                                            {/* <p class="small text-white-50 mb-4">May 18</p> */}
                                            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto
                                                mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim
                                                per, habeo iusto primis ea eam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="timeline-4 left-4">
                                    <div class="card gradient-custom">
                                        <div class="card-body p-0">
                                            <i class="fas fa-paint-brush fa-2x mb-3"></i>
                                            <h4>75 %</h4>
                                            {/* <p class="small text-white-50 mb-4">May 6</p> */}
                                            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto
                                                mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim
                                                per, habeo iusto primis ea eam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="timeline-4 right-4">
                                    <div class="card gradient-custom-4">
                                        <div class="card-body p-0">
                                            <i class="fas fa-palette fa-2x mb-3"></i>
                                            <h4>100 %</h4>
                                            {/* <p class="small text-white-50 mb-4">Apr 26</p> */}
                                            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto
                                                mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim
                                                per, habeo iusto primis ea eam.
                                            </p>
                                        </div>
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

export default ExploreOne;