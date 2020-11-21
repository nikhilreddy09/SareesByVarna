import React from 'react';
import {Link} from 'react-router-dom'
import './Toolbar.css';
import '../SideDrawer/DrawerToggleButton'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
const toolbar = props => {
    return (
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div>
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className="toolbar_logo"><a href="/">Sarees By Varna</a></div>
                <div className="spacer"></div>
                <div className="toolbar_navigation-items">
                    <ul>
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="/">About</Link> </li>
                        <li> <Link to="/all">Products</Link> </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default toolbar;