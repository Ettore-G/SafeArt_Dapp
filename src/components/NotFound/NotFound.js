import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <section className="notfoundpage row align-items-center">
                <div className="container">
                    <div  id="home"className="row text-center">
                        <div className="col-12"><h1 className="custom-text-coming">SafeArt</h1><h1 className="custom-text-coming">404 - NOT FOUND</h1>
                        </div>
                        <div id="demo" className="nonvedo"></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default NotFound;