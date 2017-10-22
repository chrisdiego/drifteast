import React, { Component } from 'react';

class LightboxPhoto extends Component {
  render() {
	return (
	   	<div className="lightbox-photo-container">
	   		<img src={this.props.clickedPhoto} />
	   	</div>	
	);
  }
}

export default LightboxPhoto;