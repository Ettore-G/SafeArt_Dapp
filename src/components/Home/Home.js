import React, { Component } from 'react';

const initData = {
    heading: "SafeArt"

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
                        <div className="col-12 col-md-12 col-xs-12 homepage-centro">
                            <img src="/img/homepage.png" class="img-homepage mt-5"></img>
                            {/* <h1 className="mt-5 custom-text-height">{this.state.data.heading}</h1> */}
                            {/* <p className="custom-text-height-p">{this.state.data.content}</p>
                            <p>{this.state.data.description}</p> */}

                            <div className="button-group">
                                {/* <WalletCard /> */}
                                <ul className="navbar-nav action text-center">
                                    <li className="nav-item">
                                        <a className="btn btn-bordered-white" href="/octopusDapp">
                                            Mint OCTOPUS
                                        </a>
                                        {/* <a className="btn btn-bordered-white" href="/mint-your-NFT">
                                            Buy on UniSwap
                                        </a>
                                        <a className="btn btn-bordered-white" href="/mint-your-NFT">
                                            Buy on Rubic
                                        </a> */}
                                    </li>
                                </ul>
                                
                            </div>
                            <div className="social-icons d-flex py-4 justify-content-center">
                                <a key="1" className="Discord" href="https://discord.gg/a6857DZXRK"target="_blank">
                                    <i className="fab fa-discord" />
                                    <i className="fab fa-discord" />
                                </a>
                                <a key="2" className="Discord" href="https://twitter.com/SafeArt_io"target="_blank">
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
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;