import React, { Component } from 'react';
// import axios from 'axios';

// const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-1/wallet";

class Activity extends Component {
    state = {
        preHeading: "Wallet Connect",
        heading: "Connect your Wallet",
        content: "Get start with SafeArt",
        data: [
            // walletData: [
              {
                "id": 1,
                "img": "/img/metamask.png",
                "title": "MetaMask",
                "content": "A browser extension with great flexibility. The web's most popular wallet"
              },
            //   {
            //     "id": 2,
            //     "img": "/img/authereum.png",
            //     "title": "Authereum",
            //     "content": "A user-friendly wallet that allows you to sign up with your phone number on any device"
            //   },
            //   {
            //     "id": 3,
            //     "img": "/img/walletconnect.png",
            //     "title": "WalletConnect",
            //     "content": "Pair with Trust, Argent, MetaMask & more. Works from any browser, without an extension"
            //   },
            //   {
            //     "id": 4,
            //     "img": "/img/dapper.png",
            //     "title": "Dapper",
            //     "content": "A security-focused cloud wallet with pin codes and multi-factor authentication"
            //   },
            //   {
            //     "id": 5,
            //     "img": "/img/kaikas.png",
            //     "title": "Kaikas",
            //     "content": "A simple-to-use wallet that works on both mobile and through a browser extension"
            //   }
            ]
          ,
        // walletData: []
    }
    // componentDidMount(){
    //     axios.get(`${BASE_URL}`)
    //         .then(res => {
    //             this.setState({
    //                 data: res.data,
    //                 walletData: res.data.walletData
    //             })
    //             // console.log(this.state.data)
    //         })
    //     .catch(err => console.log(err))
    // }
    render() {
        return (
            <section className="wallet-connect-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center">
                                <span>{this.state.preHeading}</span>
                                <h3 className="mt-3 mb-0">{this.state.heading}</h3>
                                <p>{this.state.content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center items">
                        {this.state.data.map((item, idx) => {
                            return (
                                <div key={`wd_${idx}`} className="col-12 col-md-6 col-lg-4 item">
                                    {/* Single Wallet */}
                                    <div className="card single-wallet">
                                        <a className="d-block text-center" href="/login">
                                            <img className="h-100 avatar-lg img-fluidd"  src={item.img} alt="" />
                                            <h4 className="mb-0">{item.title}</h4>
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

export default Activity;