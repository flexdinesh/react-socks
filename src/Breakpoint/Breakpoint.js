import React from 'react';
import PropTypes from 'prop-types';

import BreakpointUtil from './breakpoint-util';
import { BreakpointContext } from './BreakpointProvider';

export default class Breakpoint extends React.Component {
  constructor(props) {
    super(props);

    this.extractBreakpointAndModifierFromProps = this.extractBreakpointAndModifierFromProps.bind(
      this
    );
  }

  extractBreakpointAndModifierFromProps(allProps) {
    let breakpoint;
    let modifier;
    Object.keys(allProps).forEach((prop) => {
      if (prop === 'up' || prop === 'down' || prop === 'only') {
        modifier = prop;
      } else {
        breakpoint = prop;
      }
    });

    if (!modifier) modifier = 'only';
    return {
      breakpoint,
      modifier
    };
  }

  render() {
    const { children, ...rest } = this.props;
    const { breakpoint, modifier } = this.extractBreakpointAndModifierFromProps(
      rest
    );
    const { currentBreakpointName, currentWidth } = this.context;

    const shouldRender = BreakpointUtil.shouldRender({
      breakpointName: breakpoint,
      modifier,
      currentBreakpointName,
      currentWidth,
    });

    if (!shouldRender) return null;

    return (
      <div className={`breakpoint__${breakpoint}-${modifier}`}>{children}</div>
    );
  }
}

Breakpoint.contextType = BreakpointContext;

Breakpoint.propTypes = {
  children: PropTypes.node,
  up: PropTypes.bool,
  down: PropTypes.bool,
  only: PropTypes.bool,
};

