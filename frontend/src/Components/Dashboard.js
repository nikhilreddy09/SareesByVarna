import React from 'react';
import {connect} from 'react-redux'
import {loginAdmin} from '../Actions'
import {Link} from 'react-router-dom'
import history from '../history';
class Dashboard extends React.Component{
    componentDidMount() {
        if(!this.props.loggedin){
            history.push('/admin');
        }
    }
    render() {
        return (
            <div>
                <h2 className="ui header">
                    <i className="settings icon"></i>
                    <div className="content">
                        Welcome to admin dashboard
                    </div>
                    <div className="sub header">
                        Choose an item to continue
                    </div>
                    <div className="ui link list">
                        <Link to="/create" className="item">Create Product</Link>
                        <Link to="/manage" className="item">Manage Products</Link>
                        <Link to="/" className="item">All Products</Link>
                    </div>
                </h2>
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