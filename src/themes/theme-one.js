import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Explore from '../components/Explore/ExploreOne';
import Work from '../components/Work/Work';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import Collections from'../components/Collections/Collections';
class ThemeOne extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Hero />
                {/* <TopSeller /> */}
                {/* roadmap */}
                <Explore />
                <Collections />
                {/* FAQ */}
                <Work />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default ThemeOne;