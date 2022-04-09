import React, { Component } from 'react';

const initData = {
    title1: "TURBOLEVEL",
    text1: "This index identifies the degree of turbulence of the Octopus tentacles. We have 22 turbulence levels (from 0 to 21). Higher values refer to tentacles characterized by many eddies and swirls. Low levels denote Octopuses with less chaotic tentacles.",
    
    title2: "STYLE",
    text2:"It refers to the visualization style applied to the Octopus. We have three possibilities: Standard, High Contrast and Monochrome. Standard: the velocity field is plotted using colors from a palette, different colors correspond to different values of the velocity. Edges are depicted in black. High Contrast: same as Standard but with enhanced color contrast, white edges and exclusively dark backgrounds. Monochrome: the velocity field is plotted using a single color. The background is uniform as well.",

    title3: "COLOR",
    text3:"It is the color scheme used to depict the Octopus. We have 33 color palettes for Standard and High Contrast styles and 17 monochrome schemes for Monochrome style.",

    title4: "SHAPE",
    text4:"It is the type of shader applied. We can choose among 13 different shaders.",

    itemImg1: "/img/Octopus/shader_base.png",
    itemImg2: "/img/Octopus/shader_zoom.png",
    itemImg3: "img/Octopus/Info/shader3_bg_crop.jpeg",

    title5: "BACKGROUND",
    text5:"If the Standard style is applied, we can choose among 18 backgrounds, some of them are uniform (black and white), some of them have some 'turbulence', namely they are generated from a fluid flow simulation like the Octopus itself. Same for the High Contrast style, where we have 10 dark backgrounds. For the Monochrome style, we use as background one of the monochromatic palettes used for the Color trait, so that we have 17 different monochromatic backgrounds.",

    title6: "FURTHER INFORMATION",
    text6:"The code to numerically simulate the water flow is written using the Python FEniCS library [3]. The results are then processed with the Paraview application [4]. The code to generate the collection is written using Python.",

    title7: "REFERENCES",
    text7:"[1]https://www.youtube.com/watch?v=XoefjJdFq6k",
    text8:"[2]https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_equations ",
    text9:"[3]Documentation https://fenicsproject.org/documentation/, Navier-Stokes numerical solution https://fenicsproject.org/pub/tutorial/html/._ftut1009.html",
    text10:"[4]https://www.paraview.org/",
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

                        <div className=" col-md-4">
                            {/* Content */}
                            <div className="row">
                                <div className="col-md-12 content">
                                    <h4 className="m-0 color-primary">{this.state.initData.title2}</h4>
                                    <p className="text-octopus">{this.state.initData.text2}</p>
                                </div>
                                <div className='col-md-12 mt-3'>
                                        <div className="content">
                                            <h4 className="m-0 color-primary">{this.state.initData.title4}</h4>
                                            <p className="text-octopus">{this.state.initData.text4}</p>
                                        </div>
                                    </div>
                                    <div className='col-md-12 mt-3'>
                                        <div className="content">
                                            <h4 className="m-0 color-primary">{this.state.initData.title3}</h4>
                                            <p className="text-octopus">{this.state.initData.text3}</p>
                                        </div>
                                    </div>

                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            {/* Content */}
                            <div className="col-md-12 content dapp-octopus">
                                <h4 className="m-0 color-primary">{this.state.initData.title1}</h4>
                                <p className="text-octopus">{this.state.initData.text1}</p>
                            </div>

                            <div className="col-md-12 mt-3">
                                <img src={this.state.initData.itemImg1} alt="octopus safeart" />
                            </div>       
                        </div>




                        <div className=" col-md-4">
                            {/* Content */}
                            <div className="content">
                                <h4 className="m-0 color-primary">{this.state.initData.title5}</h4>
                                <p className="text-octopus">{this.state.initData.text5}</p>
                                <img src={this.state.initData.itemImg2} alt="octopus safeart"></img>
                            </div>
                        </div>

                        <div className=" col-md-12 mt-5">
                            {/* Content */}
                            <div className="content">
                                <h4 className="m-0 color-primary">{this.state.initData.title6}</h4>
                                <p className="text-octopus">{this.state.initData.text6}</p>
                            </div>
                        </div>

                        <div className=" col-md-12 mt-5">
                            <div className="content">
                                <h4 className="m-0 color-primary">{this.state.initData.title7}</h4>
                                <p className="text-octopus">{this.state.initData.text7}</p>
                                <p className="text-octopus">{this.state.initData.text8}</p>
                                <p className="text-octopus">{this.state.initData.text9}</p>
                                <p className="text-octopus">{this.state.initData.text10}</p>
                            </div>
                            
                        </div>


                    </div>
                </div>
            </section>
        );
    }
}

export default ItemDetails;