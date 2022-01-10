import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json/collections";

class Collections extends Component {
    state = {
        data: [],
        // collectionData: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: [
                        {nome : "BomberBax", ruolo : "Founder", img: "./img/Octopus/1.png", icon: "fab fa-twitter", link: "https://mobile.twitter.com/Altcoinbax", classcss : "octoprofile-1"},
                        {nome : "Roos", ruolo : "Co-Founder", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png", icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/domenico-centrone-498aa11b9/", classcss : "octoprofile-2"},
                        {nome : "Ettore", ruolo : " Blockchain Developer", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png", icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/ettore-gentile-6b2318154/", classcss : "octoprofile-3"},
                        {nome : "Antonio", ruolo : "Developer", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png", icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/antonio-maiorano17/", classcss : "octoprofile-4"},
                        {nome : "Federica", ruolo : "Developer", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png", icon: "fab fa-twitter", link: "", classcss : "octoprofile-5"},
                        {nome : "Aysu", ruolo : "Developer", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png", icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/aysu-celebi", classcss : "octoprofile-6"},
                        {nome : "Denise", ruolo : "Graphic Designer", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png", icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/denise-pregnolato-462118186/", classcss : "octoprofile-7"},
                        {nome : "Romina", ruolo : "Supporter", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png", icon: "fab fa-twitter", link: "https://twitter.com/RominaMinadeo", classcss : "octoprofile-8"},
                    ],
                    // collectionData: res.data.collectionData
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <section className="popular-collections-area" id="team">
                <div className="container">
                    <div id="staff"className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>Team</span>
                                    <h1 className="mt-3 mb-0">Our Team </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        {this.state.data.map((item, idx) => {
                            return (
                                <div key={`cd_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                                    <div className="card no-hover text-center">
                                        <div className="image-over pt-3">
                                            <img className={item.classcss}  alt="" />
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption col-12 p-0">
                                            {/* Card Body */}
                                            <div className="card-body">
                                                <a href={item.link} target="_blank">
                                                    <h5 className="mb-2">{item.nome}</h5>
                                                </a>
                                                <span>{item.ruolo}</span>
                                                <span className="ml-3">
                                                <a className={item.icon}></a>
                                                </span>
                                            </div>
                                        </div>
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

export default Collections;