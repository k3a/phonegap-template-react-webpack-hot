// @flow

import React, { Component } from 'react';

export default class Pane extends Component {
  props: {
    label: string;
    children: Array<Element>;
  }

	render() {
  	return (
    	<div>
      	{this.props.children}
      </div>
    );
  }
}
