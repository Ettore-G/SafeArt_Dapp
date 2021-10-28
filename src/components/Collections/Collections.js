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
                        {nome : "Andrea", ruolo : " Admin", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png"},
                        {nome : "Domenico", ruolo : " Admin", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png"},
                        {nome : "Ettore", ruolo : " Admin", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png"},
                        {nome : "Antonio", ruolo : " Admin", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png"},
                        {nome : "Federica", ruolo : " Admin", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png"},
                        {nome : "Aysu", ruolo : " Admin", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png"},
                        {nome : "Andrea", ruolo : " Admin", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png"},
                        {nome : "Monica", ruolo : " Admin", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png"},
                    ],
                    // collectionData: res.data.collectionData
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <section className="popular-collections-area">
                <div className="container">
                    <div id="staff"className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>Staff</span>
                                    <h1 className="mt-3 mb-0">Our Staff </h1>
                                </div>
                                <div className="intro-btn">
                                    <a className="btn content-btn text-left" href="/">More</a>
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
                                                <a href="/">
                                                    <h5 className="mb-2">{item.nome}</h5>
                                                </a>
                                                <span>{item.ruolo}</span>
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