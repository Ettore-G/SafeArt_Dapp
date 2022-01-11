import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Collection from '../components/Explore/Carosel';
import SafeArtClub from '../components/Club/safeartclub';
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
                <Collection />
                <HowItWorks />
                {/* <SafeArtClub /> */}
                <Faq />
                <Staff />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
                {/* lasciato qui perche se no il cronometro va in crash */}
                <div id="demo" class="d-none"></div>
            </div>
        );
    }
}

export default ThemeOne;