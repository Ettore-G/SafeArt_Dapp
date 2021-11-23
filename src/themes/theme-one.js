import React, { Component } from 'react';
import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import HowItWorks from '../components/Auctions/AuctionsOne';
import Collection from '../components/Explore/ExploreOne';
import Faq from '../components/Work/Work';
import Stars from '../components/Stars/Stars';
import Staff from'../components/Collections/Collections';

class ThemeOne extends Component {
    render() {
        return (
            <div className="main">         
                <Header />
                <Stars />
                <Hero />
                <HowItWorks />
                <Collection />
                <Stars />
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