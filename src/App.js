import React, { Component } from 'react';
import Events from './Components/Events';
import Gallery from './Components/Gallery';
import LightboxContainer from './Components/LightboxContainer';
import './App.css';

class App extends Component {
  state = {images: []}

  componentDidMount() {
    fetch('/media')
      .then(res => res.json())
      .then(images => this.setState({ images }));
  }

  render() {
    var i = 0;
    return (
      <div>
        <Events /> 
        <hr className="my-4" />
        <Gallery />
        <LightboxContainer clickedPhoto="http://d2kyiw4dkbd8xj.cloudfront.net/6.jpg" />
      {this.state.images.map(image =>
          <div key={i++} className="col-md-4"><img src={"https://s3.amazonaws.com/drifteast.com/" + image}></img></div>
        )}   
      </div>
    );
  }
}

export default App;