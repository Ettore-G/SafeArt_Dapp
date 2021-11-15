import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Scrollup from '../components/Scrollup/Scrollup';
import ComingSoon from '../components/ComingSoon/ComingSoon';
import Stars from '../components/Stars/Stars'

class NotFound extends Component {
    render() {
        return (
            <div className="main">   
                <Header />
                <Stars />
                <ComingSoon />
                <Footer />
                <Scrollup />
            </div>
        );
    }
}

export default NotFound;