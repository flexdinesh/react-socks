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

  afterEach(() => {
    widthStub.restore();
  });
});
