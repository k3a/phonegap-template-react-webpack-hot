// @flow

import React, { Component } from 'react';
import Pane from './Pane';

type Props = {
  selected: number;
  children: Array<Pane>;
}

type State = {
  selected: number;
}

export default class Tabs extends Component {
  static defaultProps = {
    selected: 0,
  };
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      selected: props.selected
    };
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
  	return this.props !== nextProps || this.state !== nextState;
  }

  handleClick(index: number, event: Event) {
  	event.preventDefault();
    this.setState({
    	selected: index
    });
  }

  _renderTitles() {
  	function labels(child, index) {
    	var activeClass = (this.state.selected === index ? 'is-active' : '');
    	return (
      	<li key={index} className={activeClass}>
        	<a
          	onClick={this.handleClick.bind(this, index)}>
          	{child.props.label}
          </a>
        </li>
      );
    }
  	return (
    	<ul className="tabs-buttons">
      	{this.props.children.map(labels.bind(this))}
      </ul>
    );
  }

  _renderContent() {
  	return (
    	<div className="tabs-content">
	    	{this.props.children[this.state.selected]}
      </div>
    );
  }

	render() {
  	return (
      <div>
        <div style={{position:'fixed',top:0,bottom:'42px',overflow:'scroll',width:'100%'}}>
          {this._renderContent()}
        </div>
        <div className="tabs is-toggle is-fullwidth" style={{position:'fixed',bottom:0,width:'100%'}}>
          {this._renderTitles()}
        </div>
      </div>
    );
  }
}
