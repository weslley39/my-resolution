import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionsSingle from './ResolutionsSingle.jsx';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

Resolutions = new Mongo.Collection("resolutions");

export default class ResolutionsWrapper extends TrackerReact(React.Component) {

  constructor() {
    super();

    this.state = {
      subscription: {
        resolutions: Meteor.subscribe('userResolutions')
      }
    }
  }

  componentWillUnmount() {
    this.state.subscription.resolutions.stop();
  }

  resolutions() {
    return Resolutions.find().fetch()
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
        <h1>My Resolutions</h1>
        <ResolutionsForm />
        <ReactCSSTransitionGroup
          component="ul"
          className="resolutions"
          transitionName="resolutionLoad"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={400}>
          {this.resolutions().map((resolution) => {
            return <ResolutionsSingle key={resolution._id} resolution={resolution} />
          })}
        </ReactCSSTransitionGroup>
      </ReactCSSTransitionGroup>
    )
  }
}
