import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Explore from './../components/Explore/ExploreThree';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

class ExploreThree extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Explore />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
                <div id="demo" class="d-none"></div>
            </div>
        );
    }
}

export default ExploreThree;