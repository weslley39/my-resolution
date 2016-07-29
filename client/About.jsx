import React, {Component} from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class About extends Component {

  setVar() {
    Session.set('test', 'Hello World');
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="route"
        transitionEnterTimeout={600}
        transitionAppearTimeout={600}
        transitionLeaveTimeout={400}
        transitionAppear={true}>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum sapien id odio pretium dictum id a libero. Pellentesque mi quam, tempor at porta id, ultrices vitae nunc. Nulla orci risus, interdum vitae nisi in, egestas porttitor dolor. Curabitur vulputate eu mi non gravida. Nullam tellus ipsum, volutpat ac nunc id, pulvinar aliquam metus. Pellentesque laoreet nibh ultrices lorem dapibus, sit amet rhoncus leo eleifend. Donec mattis risus non aliquam lobortis. Ut ac velit a ligula facilisis bibendum. Donec vitae ullamcorper ante.

          Nulla eget arcu posuere risus fringilla efficitur. Ut eget magna imperdiet, laoreet nisl mollis, viverra neque. Fusce pellentesque, elit id pretium semper, arcu libero congue nibh, quis porta leo lectus quis velit. Integer mollis nibh leo, eu sagittis eros accumsan ac. Duis id faucibus nisl. Morbi quis lorem tellus. Aliquam tempus imperdiet diam vel laoreet. Fusce ut mi ligula. Mauris in nulla at sapien tincidunt porta eget ac felis. Sed imperdiet elit ac mauris tincidunt accumsan. Aenean aliquet urna sollicitudin ullamcorper placerat.
        </p>
        <button onClick={this.setVar}> Click Me </button>
      </ReactCSSTransitionGroup>
    )
  }
}