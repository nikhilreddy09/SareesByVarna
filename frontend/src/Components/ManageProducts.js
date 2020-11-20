import React from 'react';
import {connect} from 'react-redux'
import {GetAllProducts, deleteProduct} from '../Actions/index'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router-dom'
import Toast from 'light-toast';
import history from '../history'
import NavBar from './NavBar'
class ManageProducts extends React.Component {
    componentDidMount() {
        this.props.GetAllProducts();
    }

    deleteItem(id) {
        if(!this.props.loggedin || this.props.loggedin === undefined){
            history.push('/admin');
        }
        else {
            this.props.deleteProduct(id,this.props.loggedin)
            Toast.success("product sucessfully deleted", 1000, () => {
                
            })
            history.push('/dashboard')
        }
    }

    // editRender(item) {
    //     <EditProduct id=
    // }

    renderList() {
        console.log(this.props.products)
        if(!this.props.products){
            return null;
        }
        else {
              return  this.props.products.map((item) => {
                   let url = item.imagesUrl[0]
                   console.log(url)
                   console.log(item.name)
                   return(
                        <div className="item" key={item._id}>
                            <div className="ui tiny image">
                                <img src={url} alt={item.name}></img>
                            </div>
                            <div className="middle aligned content">
                                {item.name}
                            </div>
                            <div className="ui large buttons">
                                
                                    <Link className="ui button" to={{
                                        pathname: '/edit',
                                        state: {
                                            url: url,
                                            id: item._id,
                                            name: item.name,
                                            price: item.price,
                                            sareetype: item.sareetype
                                        }
                                    }}> Edit
                                    </Link>
                                <button className="ui button" onClick={() => this.deleteItem(item._id)}>Delete</button>
                            </div>
                        </div>
                   )
               })
        }        
    }
    render() {
        return (
            <div>
                <NavBar />
                <div className="ui divided items">
                    {this.renderList()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    if(state.saree.loggedin === undefined){
        history.push('/admin')
    }
    else {
        return {
            products: state.saree.products,
            loggedin : state.saree.loggedin.token
        }
    }     
}

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        GetAllProducts,
        deleteProduct
    },
    dispatch
) 

export default connect(mapStateToProps,mapDispatchToProps)(ManageProducts)