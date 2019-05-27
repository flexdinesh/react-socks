import React from 'react';
import PropTypes from 'prop-types';

import BreakpointUtil from './breakpoint-util';
import debounce from 'lodash.debounce';

const BreakpointContext = React.createContext({
  currentWidth: 9999,
  currentBreakpointName: ''
});

export default class BreakpointProvider extends React.Component {
  constructor(props) {
    super(props);
    const currentWidth = BreakpointUtil.currentWidth;

    this.state = {
      currentWidth: currentWidth,
      currentBreakpointName: BreakpointUtil.getBreakpointName(currentWidth)
    };

    this.handleResize = debounce(this.handleResize.bind(this), 100);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    this.handleResize.cancel();
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

export const getCurrentWidth = () => {
  return React.useContext(BreakpointContext).currentWidth
}

BreakpointProvider.propTypes = {
  children: PropTypes.node,
};

export {
  BreakpointContext,
};
