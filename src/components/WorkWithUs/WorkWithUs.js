import React, { Component } from 'react';

const initData = {
    itemImg: "/img/Leo3d/leosafe.png",
    ownerImg: "./img/pp-removebg-preview.png",
    title: "We want you!",
    content: "Ltwid.com is a company specializing in the sale of Art and Design for many years in the industry and now opens the doors to a new world: our intent is to launch digital NFT collections and 3D projects related to Art, Design and Collectibles, possible thanks to a collaboration of ltwid.com with Safeart.io, our partner site for research and development of new technologies. Our company has been part of the NFT and Metaverse sector for over a year: an ever-expanding universe that offers countless possibilities of visibility for artists and immortality for art, in a completely innovative way. Our team, including web programmers, blockchain and 3D artists, is at your disposal for any clarification. The realization of the project is entirely free of charge, so much so that we are willing to buy royalties on that collection or cooperate to look for other formulas of rights management. If you are interested, at the bottom of the page you will find a google form to contact us. It is only fair to report that the numbers given to the NFT world are impressive, with 2 billion 800 million dollars in sales in 2020/21 alone. Through a new technology, known as Blockchain, also used to manage the rights of the artists in a faster and more protected way, it is ensured, moreover, the non reproducibility of the digital work and of the certificate referred to the physical work. Allowing the artist to access the Metaverse is a possibility that we suggest to evaluate with attention and foresight."
}

class WorkWithUs extends Component {
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
                                    <img src={this.state.initData.itemImg} alt="safeart octopus" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-xs-12">
                            {/* Content */}
                            <div className="content mt-5 mt-lg-0">
                                <h1 className="m-0 color-primary">{this.state.initData.title}</h1>
                                <p className="text-octopus">{this.state.initData.content}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WorkWithUs;