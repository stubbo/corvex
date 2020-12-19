import React, {Component, ReactNode} from 'react';
import './Pages/Routes';
import Router from 'Components/Router';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

export default class App extends Component {
  public render(): ReactNode {
    return (
      <Router/>
    );
  }
}
