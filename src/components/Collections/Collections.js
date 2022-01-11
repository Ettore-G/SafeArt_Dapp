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
                        {nome : "BomberBax", ruolo : "Founder", img: "./img/Octopus/nice7.jpg", icon: "fab fa-twitter", link: "https://mobile.twitter.com/Altcoinbax", classcss : "octoprofile-1"},
                        {nome : "Roos", ruolo : "Co-Founder", img: "./img/Octopus/nice5.jpg", icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/domenico-centrone-498aa11b9/", classcss : "octoprofile-1"},
                        {nome : "Ettore", ruolo : " Blockchain Dev", img: "./img/Octopus/nice1.jpg", icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/ettore-gentile-6b2318154/", classcss : "octoprofile-1"},
                        {nome : "Antonio", ruolo : "Dev", img: "./img/Octopus/nice3.jpg", icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/antonio-maiorano17/", classcss : "octoprofile-1"},
                        {nome : "Federica", ruolo : "Dev", img: "./img/Octopus/nice2.jpg", icon: "fab fa-twitter", link: "", classcss : "octoprofile-1"},
                        {nome : "Aysu", ruolo : "Dev", img: "./img/Octopus/nice4.jpg", icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/aysu-celebi", classcss : "octoprofile-1"},
                        {nome : "Denise", ruolo : "Graphic Designer", img: "./img/Octopus/nice6.jpg", icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/denise-pregnolato-462118186/", classcss : "octoprofile-1"},
                        {nome : "Romina", ruolo : "Supporter", img: "./img/Octopus/nice7.jpg", icon: "fab fa-twitter", link: "https://twitter.com/RominaMinadeo", classcss : "octoprofile-1"},
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
                    <div className="row items">
                        {this.state.data.map((item, idx) => {
                            return (
                                <div key={`cd_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                                    <div className="card no-r text-center">
                                        <div className="image-over pt-3">
                                            <img src={item.img} classname="octoprofile-1"  alt="" />
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