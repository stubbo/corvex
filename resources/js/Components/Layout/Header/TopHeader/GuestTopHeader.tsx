import React, {Component, ReactNode} from 'react';
import GenericTopHeader from 'Layout/Header/TopHeader/GenericTopHeader';
import {TopHeaderProps} from 'Layout/Header/TopHeader/AuthedTopHeader';
import RouteService, {NavItem} from 'Services/RouteService';
import { Link } from 'react-router-dom';

export class GuestTopHeader extends Component<TopHeaderProps> {
  public renderHeader(): ReactNode {
    return (
      <div className="flex-shrink-0 relative ml-4">
        <div>
          <Link to='login' className="rounded-full flex focus:outline-none">
            Login
          </Link>
        </div>
      </div>
    );
  }

  renderNavItem({route, name}: NavItem, k: number): ReactNode {
    return (
      <Link key={k} className="nav-item" to={route}>
        {name}
      </Link>
    );
  }

  public renderMobileNav(): ReactNode {
    return (
      <nav className="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
        {RouteService.validNavRoutes.map(this.renderNavItem)}
      </nav>
    );
  }

  public render(): ReactNode {
    return (
      <GenericTopHeader header={this.renderHeader()} nav={this.renderMobileNav()} {...this.props}/>
    );
  }
}
