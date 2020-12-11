import React, {Component, ReactNode} from 'react';
import {RouteComponentProps as Route, withRouter} from 'react-router';

class History extends Component<Route> {
  componentDidMount(): void {
    this.addToHistory();
  }

  componentDidUpdate(): void {
    this.addToHistory();
  }

  addToHistory(): void {
    window.browserHistory = window.browserHistory || JSON.parse(localStorage.getItem('history') || '[]');
    window.browserHistory.unshift(this.props.location.pathname);
    window.browserHistory = window.browserHistory.slice(0, 20);

    localStorage.setItem('history', JSON.stringify(window.browserHistory));
  }

  render(): ReactNode {
    return (<></>);
  }
}

export default withRouter(History);
