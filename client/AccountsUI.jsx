import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class AccountsUI extends Component {

  componentDidMount() {
      this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
  }

  ComponentWillUnmount() {
      Blaze.remove(this.view);
  }

  render() {
    return <span ref="container" />
  }
}