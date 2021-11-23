import React, { Component } from 'react';


class ExploreOne extends Component {
    render() {
        return (
            <section className="live-auctions-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>Collection</span>
                                </div>
                                <div className="intro-btn">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slider-centrale">
                <figure class="icon-cards mt-3">
                    <div class="icon-cards__content">
                        <div class="icon-cards__item d-flex align-items-center justify-content-center"><img className="caroselEasy" src="https://picsum.photos/400/400"></img></div>
                        <div class="icon-cards__item d-flex align-items-center justify-content-center"><img className="caroselEasy" src="https://picsum.photos/400/401"></img></div>
                        <div class="icon-cards__item d-flex align-items-center justify-content-center"><img className="caroselEasy" src="https://picsum.photos/400/402"></img></div>
                        <div class="icon-cards__item d-flex align-items-center justify-content-center"><img className="caroselEasy" src="https://picsum.photos/401/400"></img></div>
                        <div class="icon-cards__item d-flex align-items-center justify-content-center"><img className="caroselEasy" src="https://picsum.photos/402/400"></img></div>
                        <div class="icon-cards__item d-flex align-items-center justify-content-center"><img className="caroselEasy" src="https://picsum.photos/403/400"></img></div>
                    </div>
                </figure>
                </div>
            </section>
        );
    }
}

export default ExploreOne;