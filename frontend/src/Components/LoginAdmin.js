import React from 'react';
import {connect} from 'react-redux'
import {loginAdmin} from '../Actions'
import history from '../history'
class LoginAdmin extends React.Component {


    state = {email : "", password : ""};


    changevalues = (e) => {
        console.log(e.target.name, e.target.value)

        this.setState({
            [e.target.name] : e.target.value
        })
    }

    checkvalues = (e) => {
        e.preventDefault();
        this.props.loginAdmin(this.state);
        history.push('/dashboard')
    }

    render() {
        return (
            <form className="ui form" onSubmit={(e) =>this.checkvalues(e)}>
                <div className="field">
                    <label>Username</label>
                    <input type="text" name="email" placeholder="enter your email" onChange = {(e) => this.changevalues(e)} />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="enter your password" onChange ={(e) => this.changevalues(e)} />
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        )
    }
}

export default connect(null, {loginAdmin})(LoginAdmin)