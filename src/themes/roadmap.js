import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Roadmap from '../components/Roadmap/Roadmap';
import Roadmap2 from '../components/Roadmap/Roadmap2';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';


class Activity extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                {/* <Roadmap /> */}
                <Roadmap2 />
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

export default Activity;