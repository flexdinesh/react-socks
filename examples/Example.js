import React from 'react';

import Breakpoint from '../src/index';
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
      <div>
        <Breakpoint large up>
          <div style={{ backgroundColor: 'aqua' }}>Hello World! large up</div>
        </Breakpoint>
        <Breakpoint medium only>
          <div style={{ backgroundColor: 'yellow' }}>
            Hello World! medium only
          </div>
        </Breakpoint>
        <Breakpoint medium down>
          <div style={{ backgroundColor: 'pink' }}>
            Hello World! medium down
          </div>
        </Breakpoint>
        <Breakpoint medium up>
          <div style={{ backgroundColor: 'silver' }}>
            Hello World! medium up
          </div>
        </Breakpoint>
        <Breakpoint large down>
          <div style={{ backgroundColor: 'tomato' }}>
            Hello World! large down
          </div>
        </Breakpoint>
      </div>
    );
  }
}

export default Example;
