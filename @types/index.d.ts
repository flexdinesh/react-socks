import * as React from 'react';

export = ReactSocks;
export as namespace ReactSocks;

declare namespace ReactSocks {
  interface Props<T = { [key: string]: boolean }> {
    children?: React.ReactNode;
    up?: boolean;
    down?: boolean;
    only?: boolean;
    tagName?: string;
    className?: string;
  }

  interface BreakpointProviderProps {
    children: React.ReactNode;
  }

  interface BreakpointAndModifierProps {
    breakpoint?: string;
    modifier?: string;
    tagName: string;
    className: string;
  }

  export interface BreakpointContextProps {
    currentWidth: number;
    currentBreakpointName: string;
  }

  export function setDefaultBreakpoints(breakpoints: any[]): void;
  export function useCurrentWidth(): number;
  export function userCurrentBreakpointName(): string;

  export class Breakpoint extends React.Component<ReactSocks.Props> {
    static extractBreakpointAndModifierFromProps(allProps: ReactSocks.Props): ReactSocks.BreakpointAndModifierProps;
  }

  export class BreakpointProvider extends React.Component<ReactSocks.BreakpointProviderProps> {
    static handleResize(): void;
  }
}
