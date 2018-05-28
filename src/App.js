import React, { Component } from 'react';
import './App.css';
import Avatar from './components/avatar';
import hairExample from "./elements/male-hair-1-40.svg"
import faceExample from "./elements/basic-face-2-110.svg"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Avatar 
          width = "200px"
          haircolor = "#2b5fa7"
          skincolor = "#2b5fa7"
          face={faceExample}
          hair={hairExample}
        />
      </div>
    );
  }
}

export default App;
