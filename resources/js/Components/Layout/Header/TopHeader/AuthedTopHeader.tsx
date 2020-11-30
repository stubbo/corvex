import React, {Component, ReactNode} from 'react';
import {Transition} from '@headlessui/react';
import GenericTopHeader from 'Layout/Header/TopHeader/GenericTopHeader';
import RouteService, {NavItem} from 'Services/RouteService';
import {Link} from 'react-router-dom';

export interface TopHeaderProps {
  toggleMenu: () => void,
  menuOpen: boolean
}

interface HeaderState {
  notificationsOpen: boolean;
  userOpen: boolean;
}

export class AuthedTopHeader extends Component<TopHeaderProps, HeaderState> {
  state = {
    userOpen: false,
    notificationsOpen: false,
  }

  toggleUserMenu = (): void => {
    this.setState({
      userOpen: !this.state.userOpen,
    });
  };

  toggleNotifications = (): void => {
    this.setState({
      notificationsOpen: !this.state.notificationsOpen,
    });
  };

  public renderHeader(): ReactNode {
    const {userOpen} = this.state;

    return (
      <>
        <button onClick={this.toggleNotifications}
                className="flex-shrink-0 bg-white dark:bg-gray-700 rounded-full p-1 text-gray-400 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400">
          <span className="sr-only">View notifications</span>
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"
               fill="none" viewBox="0 0 24 24" stroke="currentColor"
               aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
          </svg>
        </button>

        <div className="flex-shrink-0 relative ml-4">
          <div>
            <button onClick={this.toggleUserMenu}
                    className="bg-white rounded-full flex focus:outline-none"
                    id="user-menu" aria-haspopup="true">
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full"
                   src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                   alt=""/>
            </button>
          </div>

          <Transition show={userOpen}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
          >
            <div
              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-xl bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 py-1"
              role="menu" aria-orientation="vertical"
              aria-labelledby="user-menu">
              <a href="#" role="menuitem"
                 className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                Your Profile
              </a>

              <a href="#" role="menuitem"
                 className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                Settings
              </a>

              <a href="#" role="menuitem"
                 className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                Sign out
              </a>
            </div>
          </Transition>
        </div>
      </>
    );
  }

  renderNavItem({route, name}: NavItem, k) {
    return (
      <Link key={k} className="nav-item" to={route}>
        {name}
      </Link>
    );
  }

  public renderNav(): ReactNode {
    return (
      <nav className="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
        {RouteService.validNavRoutes.map(this.renderNavItem)}
      </nav>
    );
  }

  public render() {
    return (
      <GenericTopHeader header={this.renderHeader()} nav={this.renderNav()} {...this.props}/>
    );
  }
}
