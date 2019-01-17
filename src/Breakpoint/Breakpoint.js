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
    let tagName = allProps.tagName || 'div'
    let className = allProps.className || ''

    Object.keys(allProps).forEach((prop) => {
      if (prop === 'up' || prop === 'down' || prop === 'only') {
        modifier = prop;
      } else if(prop !== 'tagName' && prop !== 'className') {
        breakpoint = prop;
      }
    });

    if (!modifier)  modifier  = 'only';

    return {
      breakpoint,
      modifier,
      tagName,
      className
    };
  }

  render() {
    const { children, ...rest } = this.props;
    const { breakpoint, modifier, className, tagName } = this.extractBreakpointAndModifierFromProps(
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

    const Tag = tagName
    return (
      <Tag className={`breakpoint__${breakpoint}-${modifier} ${className}`}>{children}</Tag>
    );
  }
}

Breakpoint.contextType = BreakpointContext;

Breakpoint.propTypes = {
  children: PropTypes.node,
  up: PropTypes.bool,
  down: PropTypes.bool,
  only: PropTypes.bool,
  tagName: PropTypes.string,
  className: PropTypes.string,
};

