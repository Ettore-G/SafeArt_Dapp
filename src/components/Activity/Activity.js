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
            <section className="activity-area load-more">
                <div className="container">
                    <div className="row">
                        <div className="stars">
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                        </div>
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
                            <section className="timeline-section">
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
                                            <p>Swrap </p>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-date">2022</div>
                                        <div className="timeline-content">
                                            <h3>Q4 2022</h3>
                                            <p>NFT game metaverse. </p>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-date">2023</div>
                                        <div className="timeline-content">
                                            <h3>Q1 2023</h3>
                                            <p>Trading NFT. </p>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-date">2024</div>
                                        <div className="timeline-content">
                                            <h3>Q? 2024</h3>
                                            <p>Mainnet. </p>
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