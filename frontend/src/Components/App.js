import React from 'react';
import {Route, Router} from 'react-router-dom';
import LoginAdmin from './LoginAdmin'
import history from '../history';
import createProduct from './createProduct'
import ManageProducts from './ManageProducts'
import Dashboard from './Dashboard'
import EditProduct from './EditProduct'
import LandingPage from './LandingPage';
import AllProducts from './AllProducts';
import SingleProduct from './SingleProduct';
const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Route path="/" component={AllProducts} exact />
                    <Route path="/all" component={AllProducts} />
                    <Route path="/admin" component={LoginAdmin} />
                    <Route path="/create" component={createProduct} />
                    <Route path="/manage" component={ManageProducts} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/edit" component={EditProduct} />
                    <Route path="/viewproduct" component={SingleProduct} />
                </div>
            </Router>
        </div>
    )
}
export default App;