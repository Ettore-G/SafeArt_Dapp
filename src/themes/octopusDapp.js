import React, { Component } from 'react';
import Header from '../components/Header/Header';
import OctopusDapp from './../components/Mint/OctopusDapp';
import OctopusDetails from './../components/NFTDetails/OctopusDetails.js';
import OctopusDetails2 from './../components/NFTDetails/OctopusDetails2.js';
import OctopusDetails3 from './../components/NFTDetails/OctopusDetails3.js';
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
                <OctopusDetails2 />
                <OctopusDetails3 />
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