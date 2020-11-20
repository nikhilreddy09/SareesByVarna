import React from 'react';
import {connect} from 'react-redux';
import {addProduct} from '../Actions';
import history from '../history';
import NavBar from './NavBar';
class createProduct extends React.Component {
    state = {name : "", price: 0, sareetype: "", imagesUrl: []};

    componentDidMount() {
        if(!this.props.loggedin){
            console.log("Not Logged in")
            history.push('/admin')
        }
    }

    changevalues = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitValues = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.addProduct(this.state, this.props.loggedin)
        history.push('/dashboard')
    }

    openWidget = () => {
        window.cloudinary.createUploadWidget({
            cloudName: 'ddw1pcmlc',
            uploadPreset: 'hp7m3qxg'
        },(err,result) => {
            if(result.event === 'success'){
                this.state.imagesUrl.push(result.info.secure_url)
                this.setState({imagesUrl: this.state.imagesUrl})
            }
        }).open()
    }

    render() {
        return (
            <div>
                <NavBar/>
                <form className="ui form" onSubmit = {(e) => this.submitValues(e)}>
                    <div className="field">
                        <label>Saree Name</label>
                        <input type="text" name="name" placeholder="enter name of the saree" onChange = {(e) => this.changevalues(e)} />
                    </div>
                    <div className="field">
                        <label>Saree Type</label>
                        <input type="text" name="sareetype" placeholder="enter type of saree" onChange = {(e) => this.changevalues(e)} />
                    </div>
                    <div className="field">
                        <label>Saree Price</label>
                        <input type="number" name="price" placeholder="enter Saree Price" onChange = {(e) => this.changevalues(e)} />
                    </div>
                    <button type="button" className="ui button primary" onClick={this.openWidget}>Upload</button>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    if(state.saree.loggedin !== undefined){
        return {
            loggedin : state.saree.loggedin.token
        }
    } else {
        return {}
    }
    
}
export default connect(mapStateToProps, {addProduct})(createProduct)