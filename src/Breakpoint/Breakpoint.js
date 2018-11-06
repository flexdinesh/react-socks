import React from 'react';
import PropTypes from 'prop-types';
import BreakpointUtil from './breakpoint-util';

class Breakpoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: BreakpointUtil.currentWidth,
      currentBreakpoint: BreakpointUtil.currentBreakpointName
    };

    this.extractBreakpointAndModifierFromProps = this.extractBreakpointAndModifierFromProps.bind(
      this
    );
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        width: BreakpointUtil.currentWidth,
        currentBreakpoint: BreakpointUtil.currentBreakpointName
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => {}, true);
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

    const shouldRender = BreakpointUtil.shouldRender({
      breakpointName: breakpoint,
      modifier
    });
    if (!shouldRender) return null;

    return (
      <div className={`breakpoint__${breakpoint}-${modifier}`}>{children}</div>
    );
  }
}

Breakpoint.propTypes = {
  children: PropTypes.node
};

export default Breakpoint;
