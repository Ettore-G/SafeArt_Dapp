import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import ComingSoon from '../components/ComingSoon/ComingSoon';
import Auctions from '../components/Auctions/AuctionsOne';
import Explore from '../components/Explore/ExploreOne';
import Work from '../components/Work/Work';
import Stars from '../components/Stars/Stars'
import Collections from'../components/Collections/Collections';
import Hero from '../components/Hero/Hero';
class Coming extends Component {
    render() {
        return (
            <div className="main">   
                <Header />
                <Stars />
                <ComingSoon />
                <Auctions />
                <Explore />
                <Stars />
                <Work />
                <Collections />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default Coming;