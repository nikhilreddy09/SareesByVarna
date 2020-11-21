import React from 'react';
import {connect} from 'react-redux'
import {loginAdmin} from '../Actions'
import {Link} from 'react-router-dom'
import history from '../history';
import '../Styles/Dashboard.css'
class Dashboard extends React.Component {
    componentDidMount() {
        if(!this.props.loggedin){
            history.push('/admin');
        }
    }
    render() {
        return (
            <div>
                <div className="modifyheader">
                <h2 className="ui header ">
                <i className="settings icon"></i>
                <div className="content">
                    Welcome to admin dashboard
                </div>
                <div className="sub header">
                    Choose an item to continue
                </div>
            </h2>
                </div>
                
                <div className="cardcontainer">
                <div className="singlecard">
                    <i className="cart plus icon" />
                    <br />
                    <Link to="/create" className="item">Create Product</Link>
                </div>
                <div className="singlecard">
                    <i className="edit icon" />
                    <br />
                    <Link to="/manage" className="item">Manage Products</Link>
                </div>
                <div className="singlecard">
                <i className="list icon" />
                    <br />
                    <Link to="/" className="item">All Products</Link>
                </div>
            </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
        if(state.saree.loggedin){
            return {
                loggedin : state.saree.loggedin.token
            }
        }
        else {
            return {}
        }
}

export default connect(mapStateToProps, {loginAdmin})(Dashboard)