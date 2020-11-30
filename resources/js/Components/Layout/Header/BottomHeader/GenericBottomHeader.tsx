import React, {Component, ReactNode} from 'react';
import RouteService, {NavItem} from 'Services/RouteService';
import {Link} from 'react-router-dom';

interface GenericBottomHeaderProps {
  menuOpen: boolean;
  header: ReactNode;
}

export interface BottomHeaderProps {
  menuOpen: boolean;
}

export default class GenericBottomHeader extends Component<GenericBottomHeaderProps> {
  renderNavItem({route, name}: NavItem, k) {
    return (
      <Link key={k} className="nav-item-mobile" to={route}>
        {name}
      </Link>
    );
  }

  public render() {
    const {menuOpen, header} = this.props;

    const navRoutes = RouteService.validNavRoutes;
    const showNav = navRoutes.length > 0;

    return (
      <nav className={`lg:hidden ${menuOpen ? 'block' : 'hidden'}`}
        aria-label="Global">
        {showNav && <div className="pt-2 pb-3 px-2 space-y-1">
          {navRoutes.map(this.renderNavItem)}
        </div>}
        <div className="border-t border-gray-700 pt-4 pb-3">
          {header}

          <div className="mt-3 px-2 space-y-1">
            <a href="#"
              className="nav-item-mobile">
              Your Profile
            </a>

            <a href="#" className="nav-item-mobile">
              Settings
            </a>

            <a href="#" className="nav-item-mobile">
              Sign out
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
