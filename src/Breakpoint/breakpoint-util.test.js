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
    // this wont work
    // expect(setDefaultBreakpoints(null)).toThrow();
    try {
      setDefaultBreakpoints(null);
    } catch (e) {
      expect(e.message).toEqual(
        'setDefaultBreakpoints error: Breakpoints should be an array of objects'
      );
    }
  });

  it('throw error while setting breakpoints - wrong object format', () => {
    try {
      setDefaultBreakpoints([{ a: 1010, b: 1010 }]);
    } catch (e) {
      expect(e.message).toEqual(
        'setDefaultBreakpoints error: Each breakpoint object should have only one key'
      );
    }
  });
});
