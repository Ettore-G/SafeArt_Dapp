import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Coming from '../components/ComingSoon/ComingSoon';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import Stars from '../components/Stars/Stars'
class coming extends Component {
    render() {
        return (
            <div className="main">         
                <Header />
                <Stars />
                <Coming />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default coming;