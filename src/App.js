import React from 'react';
import axios from 'axios';
import './App.css';
import { connect } from "react-redux";
import Auth from './Components/Auth/Auth';
import Welcome from './Components/Welcome/Welcome';
import {addUser} from './redux/reducers/authReducer';
//why is the reducer function not showing up as being used? I don't get it.
class App extends React.Component {

  componentDidMount = () => {
    axios
      .get('/auth/session')
      .then(res => {
        if (res.data) {
          this.props.addUser(res.data)
        }
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <main>
        <Auth />
        <Welcome />
      </main>
    );
  }
}

//Don't need to put state on props, so we don't need the mapStateToProps function
export default connect(null, {})(App);