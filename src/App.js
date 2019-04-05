import React, { Component } from 'react'; 
import './App.css';
import CustomerWrapper from './components/CustomerWrapper';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet"></link>
        <CustomerWrapper/>
      </div>
    );
  }
}

export default App;
