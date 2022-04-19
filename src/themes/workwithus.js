import React, { Component } from 'react';
import Header from '../components/Header/Header';
import WorkWithUs from '../components/WorkWithUs/WorkWithUs';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Footer from '../components/Footer/Footer';
import Scrollup from '../components/Scrollup/Scrollup';

class notfound extends Component {
    render() {
        return (
            <div className="main">   
                <Header />
                <WorkWithUs />
                <ModalSearch />
                <ModalMenu />
                <Footer />
                <Scrollup />
            </div>
        );
    }
}

export default notfound;