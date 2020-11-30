import React, {Component} from 'react';
import AuthService from 'Services/AuthService';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import RouteService, {NavItem} from 'Services/RouteService';

export interface RouterState {
  authed: boolean;
}

export default class Router extends Component<{}, RouterState> {
  state = {
    authed: AuthService.isAuthed,
  };

  constructor(props) {
    super(props);

    this.checkAuth = this.checkAuth.bind(this);
  }

  public componentDidMount() {
    AuthService.on('change', this.checkAuth);
  }

  public componentWillUnmount() {
    AuthService.removeListener('change', this.checkAuth);
  }

  checkAuth(): void {
    this.setState({
      authed: AuthService.isAuthed,
    });
  }

  renderRoute(route: NavItem, k) {
    return (
      <Route key={k} exact={route.exact ?? true} path={route.route} component={route.component}/>
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          {RouteService.validRoutes.map(this.renderRoute)}

          {!this.state.authed && <Redirect from="/" to="/login" push />}
        </Switch>
      </BrowserRouter>
    );
  }
}
