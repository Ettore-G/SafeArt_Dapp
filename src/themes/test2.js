import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Stars from '../components/Effect/Stars';
import Particles from '../components/Effect/Particles';
import ComingSoon from '../components/ComingSoon/ComingSoon';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Collection from '../components/Explore/Carosel';
import Faq from '../components/Work/Work';
import Staff from'../components/Collections/Collections';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

class Coming extends Component {
    render() {
        return (
            <div className="main">   
                <Header />
                {/* <Particles /> */}
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