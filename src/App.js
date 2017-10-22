import React, { Component } from 'react';
import Events from './Components/Events';
import Gallery from './Components/Gallery';
import LightboxContainer from './Components/LightboxContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Events /> 
        <hr className="my-4" />
        <Gallery />
        <LightboxContainer clickedPhoto="http://d2kyiw4dkbd8xj.cloudfront.net/6.jpg" />
      </div>
    );
  }
}

export default App;