import React, { Component } from 'react';

const initData = {
    pre_heading: "How it works",
    heading: "SafeArt",
    text: "Noi, ideatori di safeart.io, crediamo fortemente che il futuro dell’arte sia digitale, sia per quanto riguarda le nuove opere, che per quelle realizzate dai più grandi artisti del passato, quelli che per l’appunto hanno fatto la storia dell’arte. È nostro dovere come essere umani preservare e custodire le opere d’arte digitalizzandole e rendendole immortali sulla blockchain2. Non sappiamo cosa ci aspetta in futuro, cambiamenti climatici e altri fattori stanno mettendo a dura prova la nostra specie e tutte le creazioni artistiche esistenti. Il tutto potrà ulteriormente peggiorare con il passare del tempo, pertanto salvare l’arte è un nostro dovere. L’arte è l’espressione dell’essere umano stesso.",
    btnText: "View All",
    heading1: "Fair Distribution",
    text1: "Gli NFT safeart.io serviranno per vari scopi all’interno della piattaforma in futuro. Oltre che a collezionarli ed essere ricompensati per quelli detenuti, consentiranno di interagire all’interno dei giochi di safeart.io, sulla piattaforma di trading e per il lancio di artist token. "
}


class HowItWorks extends Component {
    state = {
        initData: {}
    }
    componentDidMount(){
        this.setState({
            initData: initData
        })
    }
    render() {
        return (
            <section className="live-auctions-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>{this.state.initData.pre_heading}</span>
                                    <h1 className="mt-3 mb-0 ">{this.state.initData.heading}</h1>
                                    <p>{this.state.initData.text}</p>
                                </div>
                                <div className="intro-btn">
                                    {/* <a className="btn content-btn" href="/auctions">{this.state.initData.btnText}</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 my-5">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    {/* <span>{this.state.initData.pre_heading}</span> */}
                                    <h1 className="mt-3 mb-0">{this.state.initData.heading1}</h1>
                                    <p>{this.state.initData.text1}</p>
                                </div>
                                <div className="intro-btn">
                                    {/* <a className="btn content-btn" href="/auctions">{this.state.initData.btnText}</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HowItWorks;