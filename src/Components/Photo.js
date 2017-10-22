import React, { Component } from 'react';

class Photo extends Component {
  render() {
    return (
    	<div className="photo col">
    		<img src={this.props.photoSource} />
    	</div>
    );
  }
}

export default Photo;