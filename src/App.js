import React, { Component } from 'react';
import './App.css';
import Avatar from './components/avatar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Avatar 
          width="200px"
          hair="http://res.cloudinary.com/lchen139/image/upload/v1527436345/tulip_bag.svg"
        />
      </div>
    );
  }
}

export default App;
