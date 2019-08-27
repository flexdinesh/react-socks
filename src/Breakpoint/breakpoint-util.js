import { isBrowser } from 'browser-or-node';

export class BreakpointUtil {
  constructor() {
    const defaultBreakpoints = [
      { xsmall: 0 }, // all mobile devices
      { small: 576 }, // mobile devices (not sure which one's this big)
      { medium: 768 }, // ipad, ipad pro, ipad mini, etc
      { large: 992 }, // smaller laptops
      { xlarge: 1200 } // laptops and desktops
    ];
    this.allBreakpoints = defaultBreakpoints;
  }

  get currentWidth() {
    return this.getWidthSafely();
  }

  getBreakpointName(width) {
    let bpName;

    this.allBreakpoints.forEach((obj) => {
      let currentKey = Object.keys(obj)[0];
      if (obj[currentKey] <= width) bpName = currentKey;
    });

    return bpName;
  }

  getBreakpointWidth(breakpointName) {
    let breakpointWidth = 0;
    this.allBreakpoints.forEach((obj) => {
      let currentKey = Object.keys(obj)[0];
      if (currentKey === breakpointName) breakpointWidth = obj[currentKey];
    });

    return breakpointWidth;
  }

  getNextBreakpointWidth(breakpointName) {
    let nextBreakpointName;
    let nextBreakpointWidth = 9999;
    let currentBreakpointIndex = 0;

    for (let i = 0; i < this.allBreakpoints.length; i++) {
      let obj = this.allBreakpoints[i];
      let currentKey = Object.keys(obj)[0];
      if (currentKey === breakpointName) {
        currentBreakpointIndex = i;
      }

      if (currentBreakpointIndex > 0) {
        let nextBreakpointIndex = currentBreakpointIndex + 1;
        if (this.allBreakpoints.length > nextBreakpointIndex) {
          let nextBreakpointObj = this.allBreakpoints[nextBreakpointIndex];
          nextBreakpointName = Object.keys(nextBreakpointObj)[0];
          nextBreakpointWidth = nextBreakpointObj[nextBreakpointName];
        }

        break;
      }
    }

    return nextBreakpointWidth;
  }

  shouldRender({ breakpointName, modifier, currentBreakpointName, currentWidth, customQuery }) {
    if (modifier === 'only') {
      if (breakpointName === currentBreakpointName) return true;
    } else if (modifier === 'up') {
      const breakpointWidth = this.getBreakpointWidth(breakpointName);
      if (currentWidth >= breakpointWidth) return true;
    } else if (modifier === 'down') {
      const nextBreakpointWidth = this.getNextBreakpointWidth(breakpointName);
      if (currentWidth < nextBreakpointWidth) return true;
    } else if (customQuery) {
      return window.matchMedia(customQuery).matches;
    }
    return false;
  }

  set breakpoints(bps) {
    this.allBreakpoints = bps;
  }

  getWidthSafely() {
    return isBrowser && window ? Math.max(document.documentElement.clientWidth, window.innerWidth || 0) : 9999;
  }
}

const B = new BreakpointUtil();
export default B;

export const setDefaultBreakpoints = (customBreakpoints) => {
  if (!customBreakpoints || typeof customBreakpoints !== 'object' || !(customBreakpoints instanceof Array)) {
    throw new Error('setDefaultBreakpoints error: Breakpoints should be an array');
  }

  customBreakpoints.forEach((obj) => {
    if (!obj || typeof obj !== 'object') {
      throw new Error('setDefaultBreakpoints error: Breakpoints should be an array of objects');
    }
    if (Object.keys(obj).length !== 1) {
      throw new Error('setDefaultBreakpoints error: Each breakpoint object should have only one key');
    }
  });

  B.breakpoints = customBreakpoints;
};
