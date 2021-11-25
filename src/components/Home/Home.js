import React, { Component } from 'react';

const initData = {
    // pre_heading: "SafeArt",
    heading: "SafeArt",
    content: "Burnt: 200 000",
    description: "Circulating: 123 Q",

}

class Hero extends Component {
    state = {
        data: {}
    }
    componentDidMount(){
        this.setState({
            data: initData
        })
    }
    render() {
        return (
            <section id="hero" className="hero-section row align-items-center">
                <div className="container-fluid">
                    <div  id="home"className="row align-items-center xs-column-reverse mt-5">
                        <div className="col-12 col-md-6 col-xs-12 main-text padding-left-homepage ">
                            <h1 className="mt-5 custom-text-height">{this.state.data.heading}</h1>
                            <p className="custom-text-height-p">{this.state.data.content}</p>
                            <p>{this.state.data.description}</p>

                            <div className="button-group">
                                {/* <WalletCard /> */}
                                <ul className="navbar-nav action text-center">
                                    <li className="nav-item">
                                        <a className="btn btn-bordered-white" href="/mint-your-NFT">
                                            Mint your NFT
                                        </a>
                                    <a className="btn btn-bordered-white" href="/mint-your-NFT">
                                            Buy on UniSwap
                                        </a>
                                        <a className="btn btn-bordered-white" href="/mint-your-NFT">
                                            Buy on Rubic
                                        </a>
                                        {/* <a className="btn btn-bordered-white" href="/mint-your-NFT">
                                            Buy on Fedex
                                        </a> */}
                                    </li>
                                </ul>
                                
                            </div>
                            <div className="social-icons d-flex py-4 justify-content-center">
                                        <a key="1" className="Discord" href="https://discord.gg/RaXvVfFD"target="_blank">
                                            <i className="fab fa-discord" />
                                            <i className="fab fa-discord" />
                                        </a>
                                        <a key="2" className="Discord" href="https://twitter.com/Safee_Art"target="_blank">
                                            <i className="fab fa-twitter" />
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a key="3" className="Discord" href="https://t.me/joinchat/EQoLdbAu0ThmYTVk"target="_blank">
                                            <i className="fab fa-telegram" />
                                            <i className="fab fa-telegram" />
                                        </a>
                                        <a key="4" className="Discord" href="https://www.reddit.com/r/SafeArt/" target="_blank">
                                            <i className="fab fa-reddit-alien"></i>
                                            <i className="fab fa-reddit-alien"></i>
                                        </a>
                                    </div>
                        </div>
                        <div className="col-12 col-md-6 col-xs-12 d-flex pad-right justify-content-center ">
                                    <img className="img-fluid no-filtro"  src="https://picsum.photos/400/400" alt="bo"></img>
                                
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;