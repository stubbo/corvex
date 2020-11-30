import React, {Component} from 'react';
import AuthService from 'Services/AuthService';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import RouteService, {NavItem} from 'Services/RouteService';

export interface RouterState {
  authed: boolean;
  routes: NavItem[];
}

export default class Router extends Component<{}, RouterState> {
  state = {
    authed: AuthService.isAuthed,
    routes: RouteService.validRoutes,
  };

  constructor(props) {
    super(props);

    this.checkAuth = this.checkAuth.bind(this);
    this.updateRoutes = this.updateRoutes.bind(this);
  }

  public componentDidMount() {
    AuthService.on('change', this.checkAuth);
    RouteService.on('change', this.updateRoutes);
  }

  public componentWillUnmount() {
    AuthService.removeListener('change', this.checkAuth);
    RouteService.removeListener('change', this.updateRoutes);
  }

  checkAuth(): void {
    this.setState({
      authed: AuthService.isAuthed,
    });
  }

  updateRoutes(): void {
    this.setState({
      routes: RouteService.validRoutes,
    });
  }

  renderRoute(route: NavItem, k) {
    return (
      <Route key={k} exact={route.exact ?? true} path={route.route} component={route.component}/>
    );
  }

  render() {
    const {authed, routes} = this.state;

    return (
      <BrowserRouter>
        <Switch>
          {routes.map(this.renderRoute)}

          {!authed && <Redirect from="/" to="/login" push />}
        </Switch>
      </BrowserRouter>
    );
  }
}
