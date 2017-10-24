import Events from './Events';
import Gallery from './Gallery';
import LightboxContainer from './LightboxContainer';
import React, { Component } from 'react';

class Media extends Component {
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

export default Media;