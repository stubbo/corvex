import React, {Component, ReactNode} from 'react';
import './Pages/Routes';
import Router from 'Components/Router';

export default class App extends Component {
  public render(): ReactNode {
    return (
      <Router/>
    );
  }
}
