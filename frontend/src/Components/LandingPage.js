import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/allproducts.css'
class LandingPage extends React.Component {
    imageurl = "https://res.cloudinary.com/ddw1pcmlc/image/upload/v1605301439/tlu1rfegqgtxiur4imcl.jpg";    
    render() {
        return (
            <div className="bg-dim full-bg-size" style={{backgroundImage: `url(${this.imageurl})`}}>
                <h1 className="centered">Welcome to Sarees By Varna</h1>
                <button className="ui secondary basic button centered2"><Link to="/all">View Sarees</Link></button>
            </div>
            
        )
    }
}
export default LandingPage 