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
        content: "Learn how to create an account, set up your wallet, and what you can do on NetStorm",
        href: "https://discord.gg/a6857DZXRK"
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
        title: "Access to our land",
        content: "Learn how list your NFTs for sale and understand the different "
    },
    {
        id: "5",
        icon: "icon far fa-handshake text-effect color-primary",
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
        title: "Become an artist",
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
            <section className="help-center-area" id="safeclub">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {/* Intro */}
                            <div className="intro">
                                <span>{this.state.initData.pre_heading}</span>
                                <p>If you become an owner of SafeArt's NFT you will have granted the access to the club</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center items">
                        {this.state.data.map((item, idx) => {
                            return (
                                <div key={`hd_${idx}`} className="col-md-4 item">
                                    {/* Help Card */}
                                    <div className="card help-card">
                                        <a className="d-block text-center" href={item.href} target="__blank">
                                            <i className={item.icon} />
                                            <h4>{item.title}</h4>
                                            {/* <p>{item.content}</p> */}
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