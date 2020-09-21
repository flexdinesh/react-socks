import { Breakpoint, BreakpointProvider } from './Breakpoint';
import { setDefaultBreakpoints, setDefaultWidth } from './Breakpoint/breakpoint-util';
import { useCurrentWidth, useCurrentBreakpointName } from './Breakpoint/BreakpointProvider';

export default Breakpoint;
export { 
  Breakpoint, 
  BreakpointProvider, 
  setDefaultBreakpoints, 
  setDefaultWidth,
  useCurrentWidth, 
  useCurrentBreakpointName 
};
