import React, { Component } from 'react';
import Photo from './Photo';
import PhotosHeading from './PhotosHeading';

class Gallery extends Component {
  render() {
    return (
    	<div className="gallery-container container-fluid">
    		<div className="row">
    			<PhotosHeading photosDate="10/16/17" photosLocation="Burlington" />
    		</div>
    		<div className="row photo-row">
    			<Photo photoSource="http://d2kyiw4dkbd8xj.cloudfront.net/6.jpg" />
    			<Photo photoSource="http://d2kyiw4dkbd8xj.cloudfront.net/6.jpg" />
    			<Photo photoSource="http://d2kyiw4dkbd8xj.cloudfront.net/6.jpg" />
    		</div>
    		<div className="row photo-row">
    			<Photo photoSource="http://d2kyiw4dkbd8xj.cloudfront.net/6.jpg" />
    			<Photo photoSource="http://d2kyiw4dkbd8xj.cloudfront.net/6.jpg" />
    			<Photo photoSource="http://d2kyiw4dkbd8xj.cloudfront.net/6.jpg" />
    		</div>
    		<div className="row photo-row">
    			<Photo photoSource="http://d2kyiw4dkbd8xj.cloudfront.net/6.jpg" />
    			<Photo photoSource="http://d2kyiw4dkbd8xj.cloudfront.net/6.jpg" />
    			<Photo photoSource="http://d2kyiw4dkbd8xj.cloudfront.net/6.jpg" />
    		</div>
    	</div>
    );
  }
}

export default Gallery;