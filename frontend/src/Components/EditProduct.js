import React from 'react';
import {connect} from 'react-redux'
import history from '../history'
import {Editsaree} from '../Actions'
import Toast from 'light-toast';
import NavBar from './NavBar';
class EditProduct extends React.Component {
    state = {name : this.props.location.state.name , price: this.props.location.state.price, sareetype: this.props.location.state.sareetype};
    
    componentDidMount() {
        if(!this.props.loggedin || this.props.loggedin === undefined){
            history.push('/admin');
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
        this.props.Editsaree(this.props.location.state.id, this.state, this.props.loggedin)
        Toast.success('Product sucessfully edited', 2000,() => {
            
        })
        history.push('/manage')
    }

    render() {
        return (
            <div>            
                <NavBar/>
                <div className="ui segment">
                    <div className="ui two column very relaxed grid stackable">
                        <div className="column">
                            <img className="ui medium rounded image" alt="saree" src={this.props.location.state.url} />
                        </div>
                        <div className="column">
                            <form className="ui form" onSubmit = {(e) => this.submitValues(e)}>
                                <div className="field">
                                    <label>Name</label>
                                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.changevalues(e) } />
                                </div>
                                <div className="field">
                                    <label>Saree Type</label>
                                    <input type="text" name="sareetype" value={this.state.sareetype} onChange = {(e) => this.changevalues(e)} />
                                </div>
                                <div className="field">
                                    <label>Saree Price</label>
                                    <input type="number" name="price" value={this.state.price} onChange = {(e) => this.changevalues(e)} />
                                </div>
                                <button className="ui button" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    if(state.saree.loggedin === undefined){
        history.push('/admin')
        return;
    }
    else {
        return {
            loggedin : state.saree.loggedin.token
        }
    }     
}
export default connect(mapStateToProps, {Editsaree})(EditProduct)