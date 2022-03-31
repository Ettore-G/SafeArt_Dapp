import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Leo3dDapp from '../components/Mint/Leo3dDapp';
import Leo3dDappComing from '../components/Mint/Leo3dDappComing';
import Leo3dDetails from '../components/NFTDetails/Leo3dDetails.js';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

class MintDapp extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Leo3dDetails />
                {/* <Leo3dDapp /> */}
                <Leo3dDappComing />
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