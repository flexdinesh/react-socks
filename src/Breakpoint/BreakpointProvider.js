import React from 'react';
import PropTypes from 'prop-types';

import BreakpointUtil from './breakpoint-util';

const BreakpointContext = React.createContext();

export default class BreakpointProvider extends React.Component {
  constructor(props) {
    super(props);
    const currentWidth = BreakpointUtil.currentWidth;

    this.state = {
      currentWidth: currentWidth,
      currentBreakpointName: BreakpointUtil.getBreakpointName(currentWidth)
    };

    this.handleResize = this.handleResize.bind(
      this
    );
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    const currentWidth = BreakpointUtil.currentWidth;

    this.setState({
      currentWidth: currentWidth,
      currentBreakpointName: BreakpointUtil.getBreakpointName(currentWidth)
    });
  }

  render() {
    const { children } = this.props;
    const { currentWidth, currentBreakpointName } = this.state;

    return (
      <BreakpointContext.Provider
        value={{
          currentWidth,
          currentBreakpointName,
        }}
      >
        { children }
      </BreakpointContext.Provider>
    );
  }
}

BreakpointProvider.propTypes = {
  children: PropTypes.node,
};

export {
  BreakpointContext,
}