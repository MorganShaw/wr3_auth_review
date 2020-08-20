import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {addUser} from '../../redux/reducers/authReducer';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            //match these to what you're getting off the req.body from authController.
            error: ''
        }
    }
    // handleRegister and handleLogin - the res.data should be exactly the same. Don't need register function and the login user function because they do the same things.... look at review 25-30 minutes in.
    handleInput = e => this.setState({ [e.target.name]: e.target.value })

    handleRegister = () => {
        const {email, password} = this.state;
        axios
            .post('/auth/register', {email, password})
            //match these to what you're getting off the req.body from authController.
            .then(res => {
                this.addUser(res.data)
            })
            .catch(err => console.log(err))
    }

    handleLogin = () => {

    }

    handleLogout = () => {

    }

    render() {
        console.log(this.props.user)
        return (
            <section>
                {
                    this.props.user.name
                    ? <button>logout</button>
                    : <div>
                            <input onChange={this.handleInput} name='email' placeholder='email' />
                            <input onChange={this.handleInput} name='password' placeholder='password' />
                            <button onClick={this.handleRegister}>register</button>
                            <button>login</button>
                    </div>
                }
            </section>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.user
    }
}

export default connect(mapStateToProps)(Auth);