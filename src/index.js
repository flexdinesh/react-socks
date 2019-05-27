import { Breakpoint, BreakpointProvider } from './Breakpoint';
import { setDefaultBreakpoints } from './Breakpoint/breakpoint-util';
import { getCurrentWidth, getCurrentBreakpointName } from './Breakpoint/BreakpointProvider';

export default Breakpoint;
export { Breakpoint, BreakpointProvider, setDefaultBreakpoints, getCurrentWidth, getCurrentBreakpointName };
