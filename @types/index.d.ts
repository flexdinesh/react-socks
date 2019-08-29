import * as React from 'react';

export = ReactSocks;
export as namespace ReactSocks;

declare namespace ReactSocks {
  interface Props {
    [key: string]: React.ReactNode | string | boolean;
    children?: React.ReactNode;
    up?: boolean;
    down?: boolean;
    only?: boolean;
    tagName?: string;
    className?: string;
    customQuery?: string;
    style?: React.CSSProperties
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

  export interface BreakpointType {
    [breakpoint: string]: number;
  }

  export function setDefaultBreakpoints(breakpoints: ReactSocks.BreakpointType[]): void;
  export function useCurrentWidth(): number;
  export function useCurrentBreakpointName(): string;

  export class Breakpoint extends React.Component<ReactSocks.Props> {
    static extractBreakpointAndModifierFromProps(allProps: ReactSocks.Props): ReactSocks.BreakpointAndModifierProps;
  }

  export class BreakpointProvider extends React.Component<ReactSocks.BreakpointProviderProps> {
    static handleResize(): void;
  }
}
