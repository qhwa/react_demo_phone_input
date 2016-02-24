require('normalize.css');
require('styles/App.css');

import React from 'react';
import PhoneInput from './PhoneInput'

class AppComponent extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      number: ''
    }
  }

  render() {
    return (
      <div>
        <PhoneInput onChange={this.inputHandler.bind(this)} />
        <p className="info">Your phone number: <label>{ this.state.number }</label></p>
      </div>
    );
  }

  inputHandler(input) {
    this.setState({ number: input.getNumber() });
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
