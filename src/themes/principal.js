import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Collection from '../components/Explore/Carosel';
import Faq from '../components/Work/Work';
import Staff from'../components/Collections/Collections';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

class ThemeOne extends Component {
    render() {
        return (
            <div className="main">         
                <Header />
                <Home />
                <HowItWorks />
                <Collection />
                <Faq />
                <Staff />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default ThemeOne;