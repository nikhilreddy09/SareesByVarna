import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import { Player } from 'video-react';
import '../Styles/SingleProduct.css'

class SingleProduct extends React.Component {
 
    state = {
        sideDrawerOpen: false,
        playing: false
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {
                sideDrawerOpen: !prevState.sideDrawerOpen,
            }
        });
    };

    backgroundClickhandler = () => {
        this.setState({
            sideDrawerOpen: false,
        })
    }


    renderImages() {
        return this.props.location.data.images.map((item, index) => {
            return (
                <div>
                    <img src={item} height={450} alt="saree"/>
                </div>
            )
        })
    }

    // renderVideo() {
    //     console.log(this.props.location.data.videoPublicId)
    //     const str = this.props.location.data.videoPublicId.replace(".mp4","");
    //     console.log(str)
    //     const params = `cloud_name=ddw1pcmlc&public_id=${str}`;
    //     const url = "https://player.cloudinary.com/embed/?"+params;
    //     return (
    //         <iframe
    //             src={url}
    //             width= {window.screen.width < 800 ? '100%': '500px'}
    //             height="450"
    //             allow="autoplay; fullscreen;"
    //             allowfullscreen
    //             style={{marginTop:'100px', width:'80%'}}
    //             title="saree"
    //             ></iframe>
    //     )
    // }
    render() {
        let size = '';
        if(window.screen.width  < 800) {
            size = '100%'
        }
        else {
            size = '500px'
        }
        let sideDrawer;
        if(this.state.sideDrawerOpen) {
            sideDrawer = <SideDrawer />
        }
        console.log(this.props.location.data)
        return (
            <div>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                {sideDrawer}
                <span onClick={this.backgroundClickhandler}>
                    <main className="container">
                        <div className="left-column">
                            <Carousel className="containerimages" autoPlay dynamicHeight={true} 
                                interval="5000" transitionTime="2000" infiniteLoop={false} showThumbs={false} width={size}>
                                {this.renderImages()}
                            </Carousel>
                        </div>
                        <div className="right-column">
                            <div className="product-name">
                                <h1>{this.props.location.data.name}</h1>
                            </div>
                            <div className="price">
                                <h3>&#8377;  {this.props.location.data.price}</h3>
                            </div>
                            <hr></hr>
                            <div className="product-type">
                                <h3>{this.props.location.data.type}</h3>
                            </div>
                            <button className=" whatsappbutton ui positive basic button">
                            <i className="whatsapp icon large"></i>
                            <a 
                            href={`https://wa.me/919989499031/?text=`
                            +encodeURIComponent("Hello.I would like to enquire about "+this.props.location.data.name+
                            " which is of type "+this.props.location.data.type+". The price of the product is "+this.props.location.data.price)} 
                            target="_blank" rel="noreferrer">Whatsapp to enquire</a>
                        </button>
                            <button className="ui primary basic button email">
                            <i className="envelope open icon large"></i>
                            <span><a href="mailto:gudibandisainikhilreddy@gmail.com" subject={this.props.location.data.name}>Email about this product</a></span>
                            </button>
                        </div>
                    </main>
                </span>
            </div>
        )
    }
}
export default SingleProduct;