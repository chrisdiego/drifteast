import React, { Component } from 'react';

class SingleEvent extends Component {
  render() {
    return (
    	<div className="col-2 image-container">
		    <img src={this.props.imageSource} />
		    <div className="overlay" />
		</div>
    );
  }
}

export default SingleEvent;