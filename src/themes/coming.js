import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import ComingSoon from '../components/ComingSoon/ComingSoon';
import HowItWorks from '../components/Auctions/AuctionsOne';
import Collection from '../components/Explore/ExploreOne';
import Faq from '../components/Work/Work';
import Stars from '../components/Stars/Stars';
import Staff from'../components/Collections/Collections';

class Coming extends Component {
    render() {
        return (
            <div className="main">   
                <Header />
                <Stars />
                <ComingSoon />
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

export default Coming;