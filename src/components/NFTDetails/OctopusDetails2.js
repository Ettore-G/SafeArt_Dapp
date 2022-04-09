import React, { Component } from 'react';

const initData = {
    title: "HOW IS AN OCTOPUS CREATED?",
    content: "The turbulent motion of water is numerically simulated by solving the Navier-Stokes equations [1,2], used in fluid dynamics to model general fluid (gas and liquids) flow. It is turbulent because the fluid motion often follows irregular patterns, causing eddies and swirls, as we see for example in candle smoke or a river, and these irregular patterns are used to generate the Octopus body. We visualize the water flow by plotting the fluid velocity field over time, and each Octopus is nothing more than a 'screenshot' of the velocity field at a certain time instant. The flow gets increasingly uneven as time passes, and the Octopus tentacles become chaotic. Each Octopus is identified by five different traits, described below.",
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
                        
                        <div className="col-md-4 col-xs-12 dapp-octopus1">
                            {/* Content */}
                            <div className="content">
                                <img src={this.state.initData.itemImg1} alt="octopus safeart" />
                            </div>
                        </div>

                        <div className="col-md-4 col-xs-12 dapp-octopus">
                            {/* Content */}
                            <div className="content">
                                <h4 className="m-0 color-primary">{this.state.initData.title}</h4>
                                <p className="text-octopus">{this.state.initData.content}</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-xs-12 dapp-octopus1 dapp-octopus">
                            {/* Content */}
                            <div className="content">
                                <img src={this.state.initData.itemImg} alt="octopus safeart" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ItemDetails;