require('normalize.css');
require('styles/App.css');

import React from 'react';
import PhoneInput from './PhoneInput'

class AppComponent extends React.Component {

  // getInitialState hack for ES6 classes
  // https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es6-classes
  constructor(props) {
    super(props)

    this.state = {
      number: ''
    }
  }

  render() {
    return (
      <div>
        <PhoneInput onChange={this.inputHandler.bind(this)} ref="input" />
        <p className="info">
          Your phone number: <label>{ this.state.number }</label>
        </p>
        <p>
          { this.state.number ?  <button onClick={this.setNumber.bind(this, '')}> clear </button> : null }
          <button onClick={this.randomirze.bind(this)}> random </button>
        </p>
      </div>
    );
  }

  inputHandler(input) {
    this.setState({ number: input.getNumber() });
  }

  randomirze() {
    this.setNumber(Math.floor(Math.random()*9999999999 + 10000000000));
  }

  setNumber(n) {
    this.refs.input.setNumber(n);
    this.setState({ number: n });
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
