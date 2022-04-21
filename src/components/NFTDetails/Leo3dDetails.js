import React, { Component } from 'react';

const initData = {
    itemImg: "/img/Leo3d/Leo (1).png",
    title: "LEO IS BACK",
    content: "Based on Leonardo da Vinci's original self-portrait, I created a 3D model. It retains its unique character, but uses a more manga-like style. I used 3D texturing software to create textures for the skin and eyes. After completing the 3D model. I created the skeleton of the face to give it different types of expressions. After the base model was completed, we selected 50 iconic models from our culture and made their implemented the associated 3D models (armor, clothing, helmet, skin, etc.) and associated textures so that Leonardo could wear them. Leonardo da Vinci can wear it. The next step is to create lighting for the scene so that the subject looks very realistic. The final step is to create a render of the expression and 50 models per model Each renderer contains an element, which allows to implement a large number of elements. There is no equal number of combinations of NFTs.",
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
            <section className="item-details-area mt-3">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-12 col-xs-12">
                            <div className="item-info">
                                <div className="item-thumb text-center mt-5">
                                    <h1 className="color-primary">{this.state.initData.title}</h1>
                                    <img className="leo3d" src={this.state.initData.itemImg} alt="leo3d safeart" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-xs-12 mt-3">
                            <div className="content mt-5 mt-lg-0">
                                <p className="text-octopus text-center">{this.state.initData.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ItemDetails;