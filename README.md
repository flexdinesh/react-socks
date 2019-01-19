# React Socks

[![Build Status](https://travis-ci.org/flexdinesh/react-socks.svg?branch=master)](https://travis-ci.org/flexdinesh/react-socks)
[![npm version](https://badge.fury.io/js/react-socks.svg)](https://www.npmjs.com/package/react-socks)
[![dependencies Status](https://david-dm.org/flexdinesh/react-socks/status.svg)](https://david-dm.org/flexdinesh/react-socks)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Wrap your components with **React Socks** to prevent unnecessary render in different viewports.

```jsx
<Breakpoint small down>
  <MyAwesomeMobileMenu>
    This component will render only in mobile devices
  </MyAwesomeMobileMenu>
</Breakpoint>
```

## Why? [![start with why](https://img.shields.io/badge/start%20with-why%3F-brightgreen.svg?style=flat)](http://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action)

Conventionally we have been writing _css media queries_ for different viewports to hide and show elements that are always present in the DOM. With React taking over the world, everything is about rendering components into the DOM. **React Socks** helps you conditionally render elements based on viewports.

1. Render viewport specific components without hassle

2. You can define your own breakpoints (Eg. xs, ipad, bigmonitors) and use them

3. You can improve your app performance if you lazy load your viewport specific components

4. Simpler and **sweeter** syntax for ease of use

## Install

```sh
$ npm install --save react-socks
```

## Usage

Just wrap your top level component with `BreakpointProvider` and use the `Breakpoint` component anywhere you need.

_Note: `BreakpointProvider` was introduced only in `v1.0.0`. It's not available in previous alpha versions._

```jsx
import Breakpoint, { BreakpointProvider } from 'react-socks';

// entry file (usually App.js or index.js)
const App = () => (
  <BreakpointProvider>
    <Example />
  </BreakpointProvider>
);
```

```jsx
// Example.js
const Example = () => {
  return (
    <div>
      <Breakpoint small down>
        <div>I will render only in mobile devices</div>
      </Breakpoint>

      <Breakpoint medium only>
        <div>I will render only in tablets (iPad, etc...)</div>
      </Breakpoint>

      <Breakpoint medium down>
        <div>I will render in tablets (iPad, etc...) and everything below (mobile devices)</div>
      </Breakpoint>

      <Breakpoint medium up>
        <div>I will render in tablets (iPad, etc...) and everything above (laptops, desktops)</div>
      </Breakpoint>

      <Breakpoint large up>
        <div>I will render in laptops, desktops and everything above</div>
      </Breakpoint>
    </div>
  );
};
```

## API

- [setDefaultBreakpoints](#set-default-breakpoints)
- [Breakpoint](#breakpoint)

### Set Default Breakpoints

You can define your own breakpoints.

- Pass an array of objects with the **breakpoint name** and **width** in _px_ to `setDefaultBreakpoints` **once** in your `App.js` or your React entry file.

**Note: You only need to set default breakpoints once in your app**

```jsx
import { setDefaultBreakpoints } from 'react-socks';

setDefaultBreakpoints([
  { xs: 0 },
  { s: 376 },
  { m: 426 },
  { l: 769 },
  { xl: 1025 }
]);

<Breakpoint m only>
    I will render only in m devices
</Breakpoint>

```

- You can use any breakpoint name (Eg. cats, puppies, dinosaurs, etc) and width.

```jsx
setDefaultBreakpoints([
  { cats: 0 },
  { dinosaurs: 900 }
]);

<Breakpoint cats only>
    Only cats can render me
</Breakpoint>
```

- If you don't set a default breakpoint, the library will fallback to **Bootstrap 4 default breakpoints** as described below.

```jsx
setDefaultBreakpoints([
  { xsmall: 0 }, // all mobile devices
  { small: 576 }, // mobile devices (not sure which one's this big)
  { medium: 768 }, // ipad, ipad pro, ipad mini, etc
  { large: 992 }, // smaller laptops
  { xlarge: 1200 } // laptops and desktops
]);
```

### Breakpoint

Import the `Breakpoint` component anywhere in the your code and start using it with your **breakpoint** and **modifier** props.

```jsx
// small is breakpoint
// down is modifier
<Breakpoint small down>
  <MyAwesomeMobileMenu>
    This component will render only in mobile devices
  </MyAwesomeMobileMenu>
</Breakpoint>
```

You have **three** modifiers

- **only** - will render the component **only** in the specified breakpoint.

- **up** - will render the component **in** the specified breakpoint and all the breakpoints **above** it (greater than the width).

- **down** - will render the component **in** the specified breakpoint and all the breakpoints **below** it (less than the width).

## Contributors

Thanks goes to these amazing people 🎉

| [<img src="https://avatars3.githubusercontent.com/u/5777880?v=4" width="100px;"/><br /><sub><b>Dinesh Pandiyan</b></sub>](https://github.com/flexdinesh)<br /> | [<img src="https://avatars1.githubusercontent.com/u/3236388?v=4" width="100px;"/><br /><sub><b>Capelo</b></sub>](https://github.com/antoniocapelo)<br /> | [<img src="https://avatars0.githubusercontent.com/u/8450195?v=4" width="100px;"/><br /><sub><b>Adarsh</b></sub>](https://github.com/sadarshannaiynar)<br /> | [<img src="https://avatars1.githubusercontent.com/u/22812131?v=4" width="100px;"/><br /><sub><b>Patryk</b></sub>](https://github.com/PatrykRudzinski)<br /> | [<img src="https://avatars1.githubusercontent.com/u/9076205?v=4" width="100px;"/><br /><sub><b>WRNGFRNK</b></sub>](https://github.com/wrngfrnk)<br />
| :---: | :---: | :---: | :---: | :---: |

## License

MIT © Dinesh Pandiyan
