import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <div className="ui three item menu">
                <Link to="/dashboard" className="item">Go Back to Dashboard</Link>
            </div>
        )
    }
}

export default NavBar;
