import React, { Component } from 'react';
import LightboxHeader from './LightboxHeader'
import LightboxPhoto from './LightboxPhoto'
import LightboxFooter from './LightboxFooter'

class LightboxPresentedImage extends Component {
  render() {
	return (
		<div className="lightbox-align">
		   	<div className="lightbox-content-container">
		   		<LightboxHeader />
		   		<LightboxPhoto clickedPhoto={this.props.clickedPhoto} />
		   		<LightboxFooter />
		   	</div>	
	   	</div>
	);
  }
}

export default LightboxPresentedImage;