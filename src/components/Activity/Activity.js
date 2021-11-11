import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-1/activity";

class Activity extends Component {
    state = {
        data: {},
        tabData_1: [],
        tabData_2: [],
        tabData_3: [],
        filterData: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    tabData_1: res.data.tabData_1,
                    tabData_2: res.data.tabData_2,
                    tabData_3: res.data.tabData_3,
                    filterData: res.data.filterData 
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <section id="roadmap" className="activity-area load-more">
                <div id="wrapper">
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div> 
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro mb-4">
                                <div className="intro-content">
                                    <span>Roadmap</span>
                                    <h3 className="mt-3 mb-0">SafeArt Roadmap</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <section className="timeline-section p-0">
                                <div className="timeline-items">
                                    <div className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-date">2022</div>
                                        <div className="timeline-content">
                                            <h3>Q1 2022</h3>
                                            <p>Il team di safeart.io vanta esperti disegnatori 3D specializzati nel mondo dell’arte e attualmente impegnati nella realizzazione delle prime due collezioni, da 10.000 NFT ciascuna, che saranno rilasciate nel primo trimestre del 2022. Le prime due collezioni, che definiremo per praticità di epoca arcaica, saranno le uniche ideate e realizzate in maniera autonoma, poiché tutti gli NFT rilasciati in futuro saranno scelti direttamente dalla community tramite votazione. La maggioranza deciderà soggetto, quantità e varianti della collezione stessa da realizzare. Gli NFT saranno su blockchain Ethereum e il mint2 sarà possibile direttamente dal sito safeart.io.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-date">2022</div>
                                        <div className="timeline-content">
                                            <h3>Q2 2020</h3>
                                            <p>Safeart.io procederà con la creazione di token collegati alla storia dell’arte antica e contemporanea, fisica e digitale in versione wrappata9. In questo modo si rilascerà quella che è una sorta di attestato di possesso a ogni singolo membro della community. Ogni opera digitale si identifica con un codice univoco che rappresenta quello che è il suo indirizzo, all’interno del quale sarà possibile risalire ai dati del creatore.
                                            Per fare un esempio le creazioni legate a Picasso verranno wrappate con la lettera S davanti, pertanto “Spic”.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-date">2022</div>
                                        <div className="timeline-content">
                                            <h3>Q4 2022</h3>
                                            <p>Nella nostra piattaforma non potevano certo mancare gaming e metaverse10. Gli NFT che creeremo saranno fruibili nei giochi che svilupperemo entro il quarto trimestre del 2022.
                                            Art Hunting è il nome del gioco che verrà elaborato. Qui il nostro avatar cercherà opere d’arte NFT inedite in un mondo futuristico; una volta trovate potrà diventarne proprietario e il token safeart.io servirà per rendere il proprio cacciatore più abile nella ricerca di altre opere d’arte di cui impadronirsi. 
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-date">2023</div>
                                        <div className="timeline-content">
                                            <h3>Q1 2023</h3>
                                            <p>Safeart.io procederà con la creazione della piattaforma di trading NFT dove quelli wrappati più rilevanti saranno listati per il trading. Prevediamo la realizzazione della piattaforma entro il primo trimestre del 2023, ma non escludiamo che ciò possa avvenire anche con un pochino di anticipo. 
                                            I trader saranno ricompensati con NFT safeart.io in base al livello di fidelizzazione guadagnato sulla piattaforma stessa. </p>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-date">2024</div>
                                        <div className="timeline-content">
                                            <h3>Q? 2024</h3>
                                            <p>Dopo testnet12 e in base al volere della community e alla sua partecipazione al progetto, safeart.io svilupperà la propria blockchain. Non è possibile ora determinare con esattezza le tempistiche, ma prevediamo di poter ultimare il prodotto nel 2024. 
                                            Riteniamo che questo sia uno sviluppo determinante e importante per la community, ma per qualsiasi decisione più complessa aspettiamo di interfacciarci con essa, al fine di individuare la strada da intraprendere insieme in modo che ne siano tutti soddisfatti, o quanto meno la maggioranza avente diritto di voto.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Activity;