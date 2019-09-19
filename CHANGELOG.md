# Changelog

## To Be Released

### version (undecided)

* yet to be released feature goes here

### 2.1.0 (19 Sep 2019)

* NEW: Support for custom breakpoints

### 2.0.2 (6 Aug 2019)

* FIX: TypeScript Breakpoint props type issue

### 2.0.1 (5 Aug 2019)

* FIX: TypeScript support for dynamic breakpoints and breakpoint hooks

### 2.0.0 (30 Jul 2019)

* NEW: Add support for React hooks
* NEW: Add types for TypeScript
* IMPROVE: Prevent memory leaks during debounced resize

## Released

### 1.0.1 (19 Jan 2019)

* IMPROVE: Debounce resize event as a performance enhancement
* IMPROVE: Add support for custom `tagName` & `className`
* FIX: Can be used with multiple contexts without having to wrap the component with BreakpointProvider in test cases

### 1.0.0 (9 Dec 2018)

* First stable release of **React Socks**.
* Following changes are included in the first stable release based on feedbacks from alpha release.
  * `BreakpointProvider` - context wrapper to prevent width calculation in each `Breakpoint` component.
  * Support SSR.
  * Performance improvements.

### 1.0.0-alpha (20 Nov 2018)

* An alpha version of **React Socks** is released to the world =)
* Following APIs are included in the first alpha
  * `setDefaultBreakpoints` to define custom breakpoints
  * `Breakpoint` component with `breakpoint` and `modifier` props.
    * Three modifiers available
      * **only** - will render the component only in the specified breakpoint.
      * **up** - will render the component in the specified breakpoint and all the breakpoints above it (greater than the width).
      * **down** - will render the component in the specified breakpoint and all the breakpoints below it (less than the width).
