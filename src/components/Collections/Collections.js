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
                        {nome : "BomberBax", ruolo : "Founder", img: "./img/Octopus/nice7.jpg", icon: "fab fa-twitter", link: "https://mobile.twitter.com/Altcoinbax", alt: "bomberbax founder safeart"},
                        {nome : "Roos", ruolo : "Co-Founder",ruolo1 : "Blockchain Dev", img: "./img/Octopus/nice5.jpg", icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/domenico-centrone-498aa11b9/", alt: "roos founder safeart"},
                        {nome : "Ettore", ruolo : " Blockchain Dev", img: "./img/Octopus/nice1.jpg", icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/ettore-gentile-6b2318154/", alt: "developer safeart"},
                        {nome : "Edef", ruolo : "Dev", img: "./img/Octopus/nice2.jpg", icon: "fab fa-twitter", link: "https://twitter.com/___edef___", alt: "artist developer safeart"},
                        {nome : "Denise", ruolo : "Graphic Designer", img: "./img/Octopus/nice6.jpg", icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/denise-pregnolato-462118186/"},
                        {nome : "Romina", ruolo : "Supporter", img: "./img/Octopus/nice3.jpg", icon: "fab fa-twitter", link: "https://twitter.com/RominaMinadeo", alt: "influencer safeart"},
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
                                    {/* <h1 className="mt-3 mb-0">Our Team </h1> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row items justify-content-center">
                        {this.state.data.map((item, idx) => {
                            return (
                                <div key={`cd_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                                    <div className="card no-r text-center staff-card">
                                        <div className="image-over pt-3">
                                            <img class="octoprofile-1" src={item.img}   alt={item.alt} />
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
                                                <br></br>
                                                <span>{item.ruolo1}</span>
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