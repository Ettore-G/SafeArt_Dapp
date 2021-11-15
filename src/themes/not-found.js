import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Scrollup from '../components/Scrollup/Scrollup';
import Stars from '../components/Stars/Stars'

class NotFound extends Component {
    render() {
        return (
            <div className="main">   
                <Header />
                <Stars />

                <Footer />
                <Scrollup />
            </div>
        );
    }
}

export default NotFound;