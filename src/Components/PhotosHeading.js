import React, { Component } from 'react';

class PhotosHeading extends Component {
  render() {
    return (
    	<div className="photo-heading">
    		<h4>{this.props.photosDate} - {this.props.photosLocation}</h4>
    	</div>
    );
  }
}

export default PhotosHeading;