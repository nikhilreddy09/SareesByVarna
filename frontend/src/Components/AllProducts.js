import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {GetAllProducts} from '../Actions'
import StackGrid from "react-stack-grid";
import '../Styles/products.css'
// import UserNavBar from './UserNavbar';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer'

class AllProducts extends React.Component {
    state = {
        sideDrawerOpen: false,
        left: 0,
    }

    drawerToggleClickHandler = () => {
        let screenwidth = ((window.screen.width*40)/100 > 400) ? 400 : (window.screen.width*40)/100 
        this.setState((prevState) => {
            return {
                sideDrawerOpen: !prevState.sideDrawerOpen,
                left: prevState.left===0 ? screenwidth: 0
            }
        });
    };

    backgroundClickhandler = () => {
        this.setState({
            sideDrawerOpen: false,
            left: 0
        })
    }

    componentDidMount() {
        this.props.GetAllProducts()
    }

    // viewSingle(data) {
    //     console.log(data)
    //     <SingleProduct item=data />
    // }

    renderList() {
        if(!this.props.products){
            return null;
        }
        else {
            console.log(this.props.products)
            return this.props.products.map((item) => {
                let url = item.imagesUrl[0]
                return (    <Link to={{
                                pathname:"/viewproduct",
                                data: {
                                    name: item.name,
                                    price: item.price,
                                    images: item.imagesUrl,
                                    type: item.sareetype,
                                }
                            }}>
                                <div className="card">
                                    <div style={{textAlign:"center"}} className="imagestyling">
                                        <img src={url} height={200} style={{width:"100%"}} alt={item.name} className="imagemodify" />
                                        <div> &#8377; {item.price}</div>
                                    </div>
                                </div>
                            </Link>
                )
            })
        }
    }

    render() {
        let sideDrawer;
        let left = 0;
        if(this.state.sideDrawerOpen) {
            sideDrawer = <SideDrawer />
            left = (window.screen.width * 60)/100
            console.log(left)
        }
        return (
            <div style={{height:'100%'}} className="back">
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                {sideDrawer}
                <span onClick={this.backgroundClickhandler}>
                <StackGrid 
                    columnWidth={150}
                    duration={1000}
                    style={{marginTop:'58px', zIndex:'100', marginLeft:`${this.state.left}px`}}
                >
                    {this.renderList()}                     
                </StackGrid>
                </span>
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.saree.products
    }
}
export default connect(mapStateToProps, {GetAllProducts})(AllProducts)