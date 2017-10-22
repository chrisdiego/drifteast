import React, { Component } from 'react';
import SingleEvent from './SingleEvent';

class Events extends Component {
  render() {
    return (
    	<div className="container events-container">
	    	<div className="row no-gutters">
		    	<SingleEvent imageSource="http://d2kyiw4dkbd8xj.cloudfront.net/7.jpg" />
		    	<SingleEvent imageSource="http://d2kyiw4dkbd8xj.cloudfront.net/12.jpg" />
		    	<SingleEvent imageSource="http://d2kyiw4dkbd8xj.cloudfront.net/17.jpg" />
		    	<SingleEvent imageSource="http://d2kyiw4dkbd8xj.cloudfront.net/240.jpg" />
		    	<SingleEvent imageSource="http://d2kyiw4dkbd8xj.cloudfront.net/36.jpg" />
		    	<SingleEvent imageSource="http://d2kyiw4dkbd8xj.cloudfront.net/zmeeks.jpg" />
	    	</div>
	    </div>
    );
  }
}

export default Events;