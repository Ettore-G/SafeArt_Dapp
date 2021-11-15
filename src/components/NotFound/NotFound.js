import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <section id="hero" className="hero-section row align-items-center">
                <div className="container-fluid">
                    <div  id="home"className="row text-center">
                        <div className="col-12"><h1>SafeArt</h1><h1 className="custom-text-coming">404 NOT FOUND</h1>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default NotFound;