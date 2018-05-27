import React, { Component } from 'react';
import './App.css';
import Item from './components/item';
import hair from './elements/male-hair-1-40.svg'
import face from './elements/basic-face-2-110.svg'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <svg src={hair} />
      </div>
    );
  }
}

export default App;
