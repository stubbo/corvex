import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {Component, ReactNode} from "react";
import {Link} from "react-router-dom";
import RouteService, {NavItem} from 'Services/RouteService';

export default class PageNav extends Component {
  renderRoute(route: NavItem, k): ReactNode {
    return (
      <Link key={k} to={route.route} className="component-nav">
        {route.icon && <>
          <FontAwesomeIcon className="component-nav-icon" icon={route.icon}/>
        </>}

        <span className="capitalize truncate">
          {route.name}
        </span>
      </Link>
    );
  }

  public render() {
    return (
      <aside
        className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
        <nav className="space-y-1">
          {RouteService.validNavRoutes.map(this.renderRoute)}
        </nav>
      </aside>
    );
  }
}
