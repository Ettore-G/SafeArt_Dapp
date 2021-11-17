import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Activities from '../components/Activity/Activity';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import Stars from '../components/Stars/Stars'


class Activity extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Stars />
                <Activities />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
                <div id="demo" class="d-none"></div>
            </div>
        );
    }
}

export default Activity;