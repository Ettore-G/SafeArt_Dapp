import React, { Component } from 'react';
import Header from '../components/Header/Header';
import NotFound from '../components/NotFound/NotFound';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Footer from '../components/Footer/Footer';
import Scrollup from '../components/Scrollup/Scrollup';

class notfound extends Component {
    render() {
        return (
            <div className="main">   
                <Header />
                <NotFound />
                <ModalSearch />
                <ModalMenu />
                <Footer />
                <Scrollup />
            </div>
        );
    }
}

export default notfound;