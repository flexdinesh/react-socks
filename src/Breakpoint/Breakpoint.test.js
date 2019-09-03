import React from 'react';
import { shallow, mount } from 'enzyme';
import Breakpoint, { BreakpointProvider } from 'index';
import { BreakpointUtil } from './breakpoint-util';
import sinon from 'sinon';

describe('Breakpoint', () => {
  it('render without crashing', () => {
    const wrapper = shallow(<Breakpoint>Hello World</Breakpoint>);
    expect(wrapper).toHaveLength(1);
  });
});

describe('Breakpoint - small', () => {
  let widthStub; // eslint-disable-line

  beforeEach(() => {
    widthStub = sinon
      .stub(BreakpointUtil.prototype, 'getWidthSafely')
      .returns(577);
  });

  it('should render small only', () => {
    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint small>
          <span>render only between 576 and 768</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(1);

    wrapper = mount(
      <BreakpointProvider>
        <Breakpoint small only>
          <span>render only between 576 and 768</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(1);
  });

  it('should render small down', () => {
    const wrapper = mount(
      <BreakpointProvider>
        <Breakpoint small down>
          <span>render below 768</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(1);
  });

  it('should render small up', () => {
    const wrapper = mount(
      <BreakpointProvider>
        <Breakpoint small up>
          <span>render above 576</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(1);
  });

  it('should not render medium only', () => {
    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint medium only>
          <span>should not render between 768 and 992</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(0);
  });

  it('should not render medium up', () => {
    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint medium up>
          <span>should not render above 768</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(0);
  });

  it('should render medium down', () => {
    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint medium down>
          <span>should render below 992</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(1);
  });

  it('should not render large only', () => {
    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint large only>
          <span>should not render between 992 and 1200</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(0);
  });

  it('should not render large up', () => {
    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint large up>
          <span>should not render above 992</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(0);
  });

  it('should render large down', () => {
    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint large down>
          <span>should render below 1200</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(1);
  });

  afterEach(() => {
    widthStub.restore();
  });
});

describe('Breakpoint - medium', () => {
  let widthStub; // eslint-disable-line

  beforeEach(() => {
    widthStub = sinon
      .stub(BreakpointUtil.prototype, 'getWidthSafely')
      .returns(768);
  });

  it('should not render small only', () => {
    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint small>
          <span>should not render between 576 and 768</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(0);
  });

  it('should not render small down', () => {
    const wrapper = mount(
      <BreakpointProvider>
        <Breakpoint small down>
          <span>should not render below 768</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(0);
  });

  it('should render small up', () => {
    const wrapper = mount(
      <BreakpointProvider>
        <Breakpoint small up>
          <span>should render above 576</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(1);
  });

  it('should render medium only', () => {
    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint medium>
          <span>should render between 768 and 992</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(1);

    wrapper = mount(
      <BreakpointProvider>
        <Breakpoint medium only>
          <span>should render between 768 and 992</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(1);
  });

  it('should render medium up', () => {
    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint medium up>
          <span>should render above 768</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(1);
  });

  it('should render medium down', () => {
    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint medium down>
          <span>should render below 992</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(1);
  });

  it('should not render large only', () => {
    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint large only>
          <span>should not render between 992 and 1200</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(0);
  });

  it('should not render large up', () => {
    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint large up>
          <span>should not render above 992</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(0);
  });

  it('should render large down', () => {
    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint large down>
          <span>should render below 1200</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(1);
  });

  afterEach(() => {
    widthStub.restore();
  });
});

describe('Breakpoint - large', () => {
  let widthStub; // eslint-disable-line

  beforeEach(() => {
    widthStub = sinon
      .stub(BreakpointUtil.prototype, 'getWidthSafely')
      .returns(1024);
  });

  it('should not render small only', () => {
    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint small>
          <span>should not render between 576 and 768</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(0);
  });

  it('should not render small down', () => {
    const wrapper = mount(
      <BreakpointProvider>
        <Breakpoint small down>
          <span>should not render below 768</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(0);
  });

  it('should render small up', () => {
    const wrapper = mount(
      <BreakpointProvider>
        <Breakpoint small up>
          <span>should render above 576</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(1);
  });

  it('should not render medium only', () => {
    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint medium>
          <span>should not render between 768 and 768</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(0);
  });

  it('should render medium up', () => {
    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint medium up>
          <span>should render above 768</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(1);
  });

  it('should not render medium down', () => {
    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint medium down>
          <span>should not render below 768</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(0);
  });

  it('should render large only', () => {
    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint large only>
          <span>should render between 992 and 1200</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(1);

    wrapper = mount(
      <BreakpointProvider>
        <Breakpoint large>
          <span>should render between 992 and 1200</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(1);
  });

  it('should render large up', () => {
    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint large up>
          <span>should render above 992</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(1);
  });

  it('should render large down', () => {
    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint large down>
          <span>should render below 1200</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(1);
  });

  it('should render as a span', () => {
    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint large tagName="span">
          <span>parent should be a span</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children().type()).toEqual('span')
  })

  it('should render as an a', () => {
    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint large tagName="a">
          <span>parent should be an a</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children().type()).toEqual('a')
  })

  it('should have className "test"', () => {
    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint large className="test">
          <span>parent should have className test</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children().hasClass('test')).toEqual(true)
  })

  it('should have stye "display: none"', () => {
    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint large style={{ display: 'none' }}>
          <span>parent should have style display: none</span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children().prop('style')).toEqual({ display: 'none' })
  })

  afterEach(() => {
    widthStub.restore();
  });
});

describe('Breakpoint - customQuery: minWidth', () => {
  let widthStub; // eslint-disable-line

  beforeEach(() => {
    widthStub = sinon
      .stub(BreakpointUtil.prototype, 'getWidthSafely')
      .returns(572);
  });

  it('should render as currentWidth greater than customMinWidth', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: true,   // assume the query matches
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });

    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint customQuery="(min-width: 300px)">
          <span> should render as currentWidth is greater than minWidth </span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(1);
  });

  it('should not render as currentWidth lesser than customMinWidth', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,   // assume the query does not match
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });

    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint customQuery="(min-width: 600px)">
          <span> should not render as currentWidth is lesser than minWidth </span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(0);
  });


  afterEach(() => {
    widthStub.restore();
  });
});

describe('Breakpoint - customQuery: maxWidth', () => {
  let widthStub; // eslint-disable-line

  beforeEach(() => {
    widthStub = sinon
      .stub(BreakpointUtil.prototype, 'getWidthSafely')
      .returns(720);
  });

  it('should render as currentWidth is less than customMaxWidth', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: true,   // assume the query matches
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });

    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint customQuery="(max-width: 1000px)">
          <span> should render as currentWidth is less than maxWidth </span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(1);
  });

  it('should not render as currentWidth greater than customMaxWidth', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,   // assume the query does not match
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });

    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint customQuery="(max-width: 600px)">
          <span> should not render as currentWidth is greater than maxWidth </span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(0);
  });


  afterEach(() => {
    widthStub.restore();
  });
});

describe('Breakpoint - customQuery: minWidth and maxWidth', () => {
  let widthStub; // eslint-disable-line

  beforeEach(() => {
    widthStub = sinon
      .stub(BreakpointUtil.prototype, 'getWidthSafely')
      .returns(720);
  });

  it('should render as currentWidth lies between the range', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: true,   // assume the query matches
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });

    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint customQuery="(min-width: 500px) and (max-width: 700px)">
          <span> should render as currentWidth lies between the range </span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(1);
  });

  it('should not render as currentWidth lies outside the given range', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,   // assume the query does not match
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });

    let wrapper = mount(
      <BreakpointProvider>
        <Breakpoint customQuery="(min-width: 320px) and (max-width: 640px)">
          <span> should not render as currentWidth lies outside the given range </span>
        </Breakpoint>
      </BreakpointProvider>
    );
    expect(wrapper.children().children()).toHaveLength(0);
  });


  afterEach(() => {
    widthStub.restore();
  });
});

