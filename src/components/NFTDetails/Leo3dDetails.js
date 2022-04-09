import React, { Component } from 'react';

const initData = {
    itemImg: "/img/Leo3d/leo446-removebg-preview.png",
    date: "2022-03-30",
    tab_1: "Description",
    tab_2: "Properties",
    tab_3: "Details",
    ownerImg: "./img/pp-removebg-preview.png",
    itemOwner: "Edef",
    created: "?? ?? 2021",
    title: "LEO 3D",
    content: "Sample text",
    price_1: "0.5 ETH",
    count: "1 of 10000",
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
                        <div className="col-md-5 col-xs-12">
                            <div className="item-info">
                                <div className="item-thumb text-center mt-5">
                                    <img src={this.state.initData.itemImg} alt="leo3d safeart" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-xs-12">
                            {/* Content */}
                            <div className="content mt-5 mt-lg-0">
                                <h1 className="m-0 color-primary">{this.state.initData.title}</h1>
                                <p className="text-octopus">{this.state.initData.content}</p>
                                {/* Owner */}
                                <div className="owner d-flex align-items-center">
                                    <span>Owned By</span>
                                    <a className="owner-meta d-flex align-items-center ml-3">
                                        <img className="avatar-sm rounded-circle" src={this.state.initData.ownerImg} alt="safeart logo" />
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