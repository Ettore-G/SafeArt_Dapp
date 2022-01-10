import React, { Component } from 'react';

const initData = {
    pre_heading: "SafeArt Club",
    heading: "How many perks I have?",
}

const data = [
    {
        id: "1",
        icon: "icon fab fa-discord text-effect color-primary",
        title: "Discord",
        content: "Learn how to create an account, set up your wallet, and what you can do on NetStorm"
    },
    {
        id: "2",
        icon: "icon fas fa-dollar-sign text-effect color-primary",
        title: "Drop Mint Free",
        content: "Learn how to create your very first NFT and how to create your NFT c can begin selling and sharing"
    },
    {
        id: "3",
        icon: "icon fas fa-hand-holding-usd text-effect color-primary",
        title: "Presale",
        content: "Learn how to purchase your first NFT and understand gas fees and what's gas free on NetStorm"
    },
    {
        id: "4",
        icon: "icon fas fa-mountain text-effect color-primary",
        title: "Acces to our land",
        content: "Learn how list your NFTs for sale and understand the different "
    },
    {
        id: "5",
        icon: "icon fas fa-volume-up text-effect color-primary",
        title: "Talk to artists",
        content: "Learn how you can partner with us to showcase your NFT drops"
    },
    {
        id: "6",
        icon: "icon fas fa-piggy-bank text-effect color-primary",
        title: "Sale on merch",
        content: "Learn how you can develop with NetStorm &amp; sell them on Marketplace"
    },
    {
        id: "7",
        icon: "icon fas fa-paint-brush text-effect color-primary ",
        title: "Became an artist",
        content: "Learn how list your NFTs for sale and understand the  list your NFTs"
    },
    {
        id: "8",
        icon: "icon fas fa-poll text-effect color-primary",
        title: "Your vote counts",
        content: "Learn how you can partner with us to showcase your NFT drops"
    },
    {
        id: "9",
        icon: "icon fas fa-glass-cheers text-effect color-primary",
        title: "Access to the party",
        content: "Learn how you can develop with NetStorm &amp; sell them on Marketplace"
    }
]

class SafeArtClub extends Component {
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
            <section className="help-center-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center">
                                <span>{this.state.initData.pre_heading}</span>
                                <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                                <p>{this.state.initData.content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center items">
                        {this.state.data.map((item, idx) => {
                            return (
                                <div key={`hd_${idx}`} className="col-12 col-md-6 col-lg-4 item">
                                    {/* Help Card */}
                                    <div className="card help-card">
                                        <a className="d-block text-center">
                                            <i className={item.icon} />
                                            <h4>{item.title}</h4>
                                            <p>{item.content}</p>
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default SafeArtClub;