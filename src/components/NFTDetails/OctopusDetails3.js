import React, { Component } from 'react';

const initData = {
    itemImg: "/img/Octopus/Info/flow_oct_bg-removebg-preview.png",
    title: "How is an Octopus created?",
    content: "The turbulent motion of water is numerically simulated by solving the Navier-Stokes equations [1,2], used in fluid dynamics to model general fluid (gas and liquids) flow. It is turbulent because the fluid motion often follows irregular patterns, causing eddies and swirls, as we see for example in candle smoke or a river, and these irregular patterns are used to generate the Octopus body. We visualize the water flow by plotting the fluid velocity field over time, and each Octopus is nothing more than a ?screenshot? of the velocity field at a certain time instant. The flow gets increasingly uneven as time passes, and the Octopus tentacles become chaotic. Each Octopus is identified by five different traits, described below.",
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
                        <div className="col-6 col-lg-6">
                            {/* Content */}
                            <div className="content">
                                <img src="" alt="" />
                            </div>
                        </div>
                        <div className="col-6 col-lg-6">
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