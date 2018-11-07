import BU, { setDefaultBreakpoints } from './breakpoint-util';

describe('Breakpoint Util', () => {
  it('set default breakpoints', () => {
    setDefaultBreakpoints([
      { xs: 0 },
      { s: 376 },
      { m: 426 },
      { l: 769 },
      { xl: 1025 }
    ]);
    expect(BU.allBreakpoints).toHaveLength(5);
  });

  it('throw error while setting breakpoints - not an array', () => {
    expect(() => setDefaultBreakpoints(null)).toThrowError(/^setDefaultBreakpoints error: Breakpoints should be an array$/);
    expect(() => setDefaultBreakpoints("hello")).toThrowError(/^setDefaultBreakpoints error: Breakpoints should be an array$/);
    expect(() => setDefaultBreakpoints({})).toThrowError(/^setDefaultBreakpoints error: Breakpoints should be an array$/);
    expect(() => setDefaultBreakpoints(undefined)).toThrowError(/^setDefaultBreakpoints error: Breakpoints should be an array$/);
    expect(() => setDefaultBreakpoints(1.0)).toThrowError(/^setDefaultBreakpoints error: Breakpoints should be an array$/);
    expect(() => setDefaultBreakpoints(true)).toThrowError(/^setDefaultBreakpoints error: Breakpoints should be an array$/);
    expect(() => setDefaultBreakpoints(false)).toThrowError(/^setDefaultBreakpoints error: Breakpoints should be an array$/);
  });

  it('throw error while setting breakpoints - not an array of objects', () => {
    expect(() => setDefaultBreakpoints([null])).toThrowError(/^setDefaultBreakpoints error: Breakpoints should be an array of objects$/);
    expect(() => setDefaultBreakpoints(["hello"])).toThrowError(/^setDefaultBreakpoints error: Breakpoints should be an array of objects$/);
    expect(() => setDefaultBreakpoints([undefined])).toThrowError(/^setDefaultBreakpoints error: Breakpoints should be an array of objects$/);
    expect(() => setDefaultBreakpoints([1.0])).toThrowError(/^setDefaultBreakpoints error: Breakpoints should be an array of objects$/);
    expect(() => setDefaultBreakpoints([true, false])).toThrowError(/^setDefaultBreakpoints error: Breakpoints should be an array of objects$/);
  });
  
  it('throw error while setting breakpoints - wrong object format', () => {
    expect(() => setDefaultBreakpoints([{}])).toThrowError(/^setDefaultBreakpoints error: Each breakpoint object should have only one key$/);
    expect(() => setDefaultBreakpoints([{ a: 1010, b: 1010 }])).toThrowError(/^setDefaultBreakpoints error: Each breakpoint object should have only one key$/);
  });
});
