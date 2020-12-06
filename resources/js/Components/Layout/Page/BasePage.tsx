import {Component, ReactNode} from 'react';

export default class BasePage<P = unknown, T = unknown> extends Component<P, T> {
  stateUpdate = (state: Pick<T, keyof T>): Promise<void> => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };

  public render(): undefined|ReactNode {
    return undefined;
  }
}
