import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    user: {"Hello":"test"}
  }
  testServerAPI(){
    console.log("Hello World");
    axios.get(`https://demo-server-node.herokuapp.com/users`)
      .then(res => {
        const user = res.data;
        this.setState({ user });
      })
  }
  render() {
    return (
      <div>
        <button onClick={this.testServerAPI}>Click For HTTP Request</button>
        hello         <span>{this.state.user.Hello}</span>
      </div>
    );
  }
}

export default App;
