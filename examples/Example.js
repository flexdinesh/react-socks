import React from 'react';

import Breakpoint, { BreakpointProvider } from '../src/index';
// import { setDefaultBreakpoints } from '../src/index';
// setDefaultBreakpoints([
//   { xs: 0 },
//   { s: 376 },
//   { m: 426 },
//   { l: 769 },
//   { xl: 1025 }
// ]);

class Example extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <BreakpointProvider>
        <div>
          <Breakpoint small down>
            <div style={{ backgroundColor: '#0074D9' }}>
              Hello World! small down
            </div>
          </Breakpoint>
          <Breakpoint medium down>
            <div style={{ backgroundColor: '#F012BE' }}>
              Hello World! medium down
            </div>
          </Breakpoint>
          <Breakpoint medium only>
            <div style={{ backgroundColor: '#FFDC00' }}>
              Hello World! medium only
            </div>
          </Breakpoint>

          <Breakpoint medium up>
            <div style={{ backgroundColor: '#2ECC40' }}>
              Hello World! medium up
            </div>
          </Breakpoint>
          <Breakpoint large down>
            <div style={{ backgroundColor: '#FF851B' }}>
              Hello World! large down
            </div>
          </Breakpoint>
          <Breakpoint large up>
            <div style={{ backgroundColor: '#39CCCC' }}>
              Hello World! large up
            </div>
          </Breakpoint>
          <Breakpoint xlarge only>
            <div style={{ backgroundColor: '#FF4136' }}>
              Hello World! xlarge only
            </div>
          </Breakpoint>
          <Breakpoint customQuery="(min-width: 500px)">
            <div style={{backgroundColor: 'red' }}>
              Custom breakpoint: (min-width : 500px)
            </div>
          </Breakpoint>
          <Breakpoint customQuery="(max-width: 1000px)">
            <div style={{backgroundColor: 'yellow' }}>
              Custom breakpoint: (max-width : 1000px)
            </div>
          </Breakpoint>
          <Breakpoint customQuery="(min-width: 500px) and (max-width: 700px)">
            <div style={{backgroundColor: 'lightblue' }}>
              Custom breakpoint: (min-width : 500px) && (max-width : 700px)
            </div>
          </Breakpoint>
        </div>
      </BreakpointProvider>
    );
  }
}

export default Example;
