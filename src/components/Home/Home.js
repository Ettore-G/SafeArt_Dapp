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
                            {/* <img src="/img/homepage.png" class="img-homepage mt-5" alt="safeart logo"></img> */}
                            <h1 className="custom-text-height mt-5 ">{this.state.data.heading}</h1>
                            {/* <p className="custom-text-height-p">{this.state.data.content}</p>
                            <p>{this.state.data.description}</p> */}

                            <div className="button-group">
                                {/* <WalletCard /> */}
                                <ul className="navbar-nav action text-center">
                                    <li className="nav-item">
                                        <a className="btn btn-bordered-white" href="/leo3dDapp">
                                            Mint Leo 3D
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;