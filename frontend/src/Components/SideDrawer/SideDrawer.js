import React from 'react';
import {Link} from 'react-router-dom'
import './SideDrawer.css'
const sideDrawer = props => (
    <nav className="side-drawer">
        <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/">About</Link> </li>
            <li> <Link to="/">Products</Link> </li>
        </ul>
    </nav>
)

export default sideDrawer;