import React, { Component } from 'react';
import Header from '../components/Header/Header';
import OctopusDapp from './../components/Mint/OctopusDapp';
import OctopusDetails from './../components/NFTDetails/OctopusDetails.js';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

class MintDapp extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <OctopusDetails />
                <OctopusDapp />
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

export default MintDapp;