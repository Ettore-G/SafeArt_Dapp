import React, { Component } from 'react';

const initData = {
    title1: "TurboLevel",
    text1: "This index identifies the degree of turbulence of the Octopus tentacles. We have 22 turbulence levels (from 0 to 21). Higher values refer to tentacles characterized by many eddies and swirls. Low levels denote Octopuses with less chaotic tentacles.",
    
    title2: "Style",
    text2:"It refers to the visualization style applied to the Octopus. We have three possibilities: Standard, High Contrast and Monochrome. Standard: the velocity field is plotted using colors from a palette, different colors correspond to different values of the velocity. Edges are depicted in black. High Contrast: same as Standard but with enhanced color contrast, white edges and exclusively dark backgrounds. Monochrome: the velocity field is plotted using a single color. The background is uniform as well.",

    title3: "Color",
    text3:"It is the color scheme used to depict the Octopus. We have 33 color palettes for Standard and High Contrast styles and 17 monochrome schemes for Monochrome style.",

    title4: "Shape",
    text4:"It is the type of shader applied. We can choose among 13 different shaders.",

    itemImg1: "img/Octopus/Info/shader1_bg_crop.jpeg",
    itemImg2: "img/Octopus/Info/shader2_bg_crop.jpeg",
    itemImg3: "img/Octopus/Info/shader3_bg_crop.jpeg",

    title5: "Background",
    text5:"If the Standard style is applied, we can choose among 18 backgrounds, some of them are uniform (black and white), some of them have some ?turbulence?, namely they are generated from a fluid flow simulation like the Octopus itself. Same for the High Contrast style, where we have 10 dark backgrounds. For the Monochrome style, we use as background one of the monochromatic palettes used for the Color trait, so that we have 17 different monochromatic backgrounds.",

    title6: "Further information",
    text6:"The code to numerically simulate the water flow is written using the Python FEniCS library [3]. The results are then processed with the Paraview application [4]. The code to generate the collection is written using Python.",
}

class ItemDetails extends Component {
    state = {
        initData: {},
    }
    componentDidMount(){
        this.setState({
            initData: initData,
        })
    }
    render() {
        return (
            <section className="item-details-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-12">
                            {/* Content */}
                            <div className="content">
                                <h2 className="m-0 text-center">{this.state.initData.title1}</h2>
                                <p className="text-octopus">{this.state.initData.text1}</p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-12 mt-5">
                            {/* Content */}
                            <div className="content">
                                <h2 className="m-0 text-center">{this.state.initData.title2}</h2>
                                <p className="text-octopus">{this.state.initData.text2}</p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-12 mt-5">
                            {/* Content */}
                            <div className="content">
                                <h2 className="m-0 text-center">{this.state.initData.title3}</h2>
                                <p className="text-octopus">{this.state.initData.text3}</p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-12 mt-5">
                            {/* Content */}
                            <div className="content">
                                <h2 className="m-0 text-center">{this.state.initData.title4}</h2>
                                <p className="text-octopus">{this.state.initData.text4}</p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-12 mt-5">
                            {/* Content */}
                            <div className="cointainer">
                                <div className="row">
                                    <div className="col-md-4 mt-3">
                                        <img src={this.state.initData.itemImg1} alt="" />
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <img src={this.state.initData.itemImg2} alt="" />
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <img src={this.state.initData.itemImg3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-12 mt-5">
                            {/* Content */}
                            <div className="content">
                                <h2 className="m-0 text-center">{this.state.initData.title5}</h2>
                                <p className="text-octopus">{this.state.initData.text5}</p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-12 mt-5">
                            {/* Content */}
                            <div className="content">
                                <h2 className="m-0 text-center">{this.state.initData.title6}</h2>
                                <p className="text-octopus">{this.state.initData.text6}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default ItemDetails;