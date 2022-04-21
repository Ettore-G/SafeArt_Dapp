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
                                        <button className="button-74 mb-3" role="button">
                                            Mint Leo 3D (SOON)
                                        </button>   <br></br>
                                        <button className="button-74 mb-3" role="button" href="https://discord.gg/a6857DZXRK"target="_blank">
                                            Join in our discord
                                        </button>
                                    </li>
                                </ul>
                                
                            </div>
                            <div className="social-icons d-flex py-4 justify-content-center">
                                <a key="2" className="Discord" href="https://linktr.ee/safeart.io"target="_blank">
                                <i class="fa fa-link" aria-hidden="true"></i>
                                <i class="fa fa-link" aria-hidden="true"></i>
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