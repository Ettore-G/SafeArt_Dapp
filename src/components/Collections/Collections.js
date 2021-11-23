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
                        {nome : "BomberBax", ruolo : "Founder", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png", icon: "fab fa-twitter", link: "https://mobile.twitter.com/Altcoinbax"},
                        {nome : "Roos", ruolo : "Co-Founder", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png", icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/domenico-centrone-498aa11b9/"},
                        {nome : "Ettore", ruolo : "Developer", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png", icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/ettore-gentile-6b2318154/"},
                        {nome : "Antonio", ruolo : "Developer", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png", icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/antonio-maiorano17/"},
                        {nome : "Federica", ruolo : "Developer", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png", icon: "fab fa-twitter", link: ""},
                        {nome : "Aysu", ruolo : "Developer", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png", icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/aysu-celebi"},
                        {nome : "Denise", ruolo : "Graphic Designer", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png", icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/denise-pregnolato-462118186/"},
                    ],
                    // collectionData: res.data.collectionData
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <section className="popular-collections-area" id="staff">
                <div className="container">
                    <div id="staff"className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>Staff</span>
                                    <h1 className="mt-3 mb-0">Our Staff </h1>
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
                                            <img className="card-img-top" src={item.img} alt="" />
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption col-12 p-0">
                                            {/* Card Body */}
                                            <div className="card-body mt-4">
                                                <a href={item.link} target="_blank">
                                                    <h5 className="mb-2">{item.nome}</h5>
                                                </a>
                                                <span>{item.ruolo}</span>
                                                <div>
                                                <a className={item.icon} ></a>
                                                </div>
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