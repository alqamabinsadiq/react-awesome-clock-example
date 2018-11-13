import React, { Component } from 'react';
import ReactAwesomeClock from 'react-awesome-clock';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <div>Without Days</div> */}
          <ReactAwesomeClock day={true} style={{ color: "white", fontSize: 70 }} startDate="2018-11-11" />
          {/* <div>With Days</div> */}
          <ReactAwesomeClock day={true} style={{ color: "white", fontSize: 70 }} startDate="2018-11-11" />
        </header>
      </div>
    );
  }
}

export default App;
