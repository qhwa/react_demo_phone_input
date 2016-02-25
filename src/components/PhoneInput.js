import React from 'react';
import ReactDom from 'react-dom';

class PhoneInputComponent extends React.Component {

  // getInitialState hack for ES6 classes
  // https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es6-classes
  constructor(props) {
    super(props)

    this.state = {
      phoneNumber: ''
    }
  }

  render() {
    return (
      <input
        value={this.getPhoneText()}
        onChange={this.changeHandler.bind(this)}
        className="phone-input"
        ref="phoneInput"
        autoFocus={true}
        />
    );
  }

  getPhoneText() {
    return this.formatPhoneNumber(this.state.phoneNumber);
  }

  formatPhoneNumber(rawNumber) {
    return rawNumber.toString().split('').map(function(char, idx) {
      return (idx === 2 || idx === 6 ) ? char + ' ' : char;
    }).join('').trim();
  }

  changeHandler(event) {
    let newNumber = this.getPhoneNumber(event.target.value);
    this.setState({ phoneNumber: newNumber}, this.dispatch.bind(this));
  }

  dispatch() {
    let { onChange } = this.props;
    if(onChange) {
      onChange(this);
    }
  }

  getPhoneNumber(text) {
    return text.replace(/[^\d]/g, '').substring(0, 11);
  }

  // HOOK
  componentDidUpdate() {
    this.keepCursorAtLast();
  }

  keepCursorAtLast() {
    let dom = ReactDom.findDOMNode(this.refs.phoneInput);
    let value = dom.value;
    dom.setSelectionRange(value.length, value.length);
  }

  getNumber() {
    return this.state && this.state.phoneNumber;
  }

  setNumber(n) {
    this.setState({ phoneNumber: n })
  }
}

PhoneInputComponent.defaultProps = {
};

export default PhoneInputComponent;
