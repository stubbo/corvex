import React, {Component} from 'react';

export default class BasePage<P = {}, T = {}> extends Component<P, T> {
  stateUpdate = (state: Pick<T, keyof T>): Promise<void> => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };
}
