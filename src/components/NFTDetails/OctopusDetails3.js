import React, { Component } from 'react';

const initData = {
    itemImg: "/img/Octopus/Info/flow_oct_bg.png",
    itemImg1: "/img/Octopus/Info/larger.gif",
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
            <section className="item-details-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-6 col-xs-12">
                            {/* Content */}
                            <div className="content">
                                <img src={this.state.initData.itemImg1} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* Content */}
                            <div className="content">
                                <img src={this.state.initData.itemImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ItemDetails;