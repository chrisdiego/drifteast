import React, { Component } from 'react';
import LightboxPresentedImage from './LightboxPresentedImage'
import ScrollLock from 'react-scrolllock';

class LightboxContainer extends Component {
	constructor() {
      super();
      this.state = {open: true};
    }

  render() {
    if(this.state.open) {
	    return (
	    	<div className="container-fluid lightbox-container" onClick={() => {this.setState({open:false})}}>
	    		<LightboxPresentedImage clickedPhoto={this.props.clickedPhoto} />
	    		<div className="lightbox-background" />
	    	<ScrollLock />
	    	</div>	
	    );
	}
	else{
		return(
			<div />
		);
	}
  }
}

export default LightboxContainer;