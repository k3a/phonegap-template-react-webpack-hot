import React, {Component} from 'react';
import alertify from 'alertify.js';

export default class ReservationForm extends Component {
  render() {
    return (
<div>

<div className="field">
  <label className="label">Name</label>
  <p className="control">
    <input className="input" type="text" placeholder="Text input"/>
  </p>
</div>

<div className="field">
  <label className="label">Username</label>
  <p className="control has-icons-left has-icons-right">
    <input className="input is-success" type="text" placeholder="Text input" defaultValue="bulma"/>
    <span className="icon is-small is-left">
      <i className="fa fa-user"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fa fa-check"></i>
    </span>
  </p>
  <p className="help is-success">This username is available</p>
</div>

<div className="field">
  <label className="label">Email</label>
  <p className="control has-icons-left has-icons-right">
    <input className="input is-danger" type="text" placeholder="Email input" defaultValue="hello@"/>
    <span className="icon is-small is-left">
      <i className="fa fa-envelope"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fa fa-warning"></i>
    </span>
  </p>
  <p className="help is-danger">This email is invalid</p>
</div>

<div className="field">
  <label className="label">Subject</label>
  <p className="control">
    <span className="select">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </span>
  </p>
</div>

<div className="field">
  <label className="label">Message</label>
  <p className="control">
    <textarea className="textarea" placeholder="Textarea"></textarea>
  </p>
</div>

<div className="field">
  <p className="control">
    <label className="checkbox">
      <input type="checkbox"/>
      I agree to the <a>terms and conditions</a>
    </label>
  </p>
</div>

<div className="field">
  <p className="control">
    <label className="radio">
      <input type="radio" name="question"/>
      Yes
    </label>
    <label className="radio">
      <input type="radio" name="question"/>
      No
    </label>
  </p>
</div>

<div className="field is-grouped">
  <p className="control">
    <button className="button is-primary" onClick={() => alertify.alert('Ready!')}>Submit</button>
  </p>
  <p className="control">
    <button className="button is-link" onClick={() => alert('Ready!')}>Cancel</button>
  </p>
</div>

</div>
    )
  }
}
