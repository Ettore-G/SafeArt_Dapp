import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Scrollup from '../components/Scrollup/Scrollup';
import Stars from '../components/Stars/Stars'
import NotFound from '../components/NotFound/NotFound';

class nottfound extends Component {
    render() {
        return (
            <div className="main">   
                <Header />
                <Stars />
                <NotFound />
                <Footer />
                <Scrollup />
            </div>
        );
    }
}

export default nottfound;