import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import Stars from '../components/Stars/Stars'
import NotFound from '../components/NotFound/NotFound';

class nottfound extends Component {
    render() {
        return (
            <div className="main">   
                <Header />
                <Stars />
                <NotFound />
                <ModalSearch />
                <ModalMenu />
                <Footer />
                <Scrollup />
            </div>
        );
    }
}

export default nottfound;