// @flow

import React, { Component } from 'react';
import Tabs from './Tabs';
import Pane from './Pane';
import ReservationForm from './ReservationForm';
import alertify from 'alertify.js';

import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

export default class App extends Component {
  onTest(ev: Event) {
    fetch('https://httpbin.org/get')
      .then(function(resp) {
        return resp.text();
      })
      .then(function(data) {
        alertify.alert(data);
      })
  }

  render() {
    return (
    	<div>
        <Tabs>
          <Pane label="Tab 1">
            <ReservationForm/>
          </Pane>
          <Pane label="Tab 2">
            <div>This is my tab 2 contents!<br/>This is longed<br/>than other tabs<br/>
              as you can see. <a onClick={this.onTest}>test</a></div>
          </Pane>
          <Pane label="Tab 3">
            <div>This is my tab 3 contents!</div>
          </Pane>
        </Tabs>
      </div>
    );
  }
}
