import React, {Component, ReactNode} from 'react';
import Search from 'Layout/Header/TopHeader/Search';

export interface HeaderTopGenericProps {
  toggleMenu: () => void,
  menuOpen: boolean
  header: ReactNode
  nav: ReactNode
}

export default class GenericTopHeader extends Component<HeaderTopGenericProps> {
  public render() {
    const {menuOpen} = this.props;

    return (
      <div
        className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:dark:divide-gray-700 lg:px-8">
        <div className="relative h-16 flex justify-between">
          <div className="relative z-10 px-2 flex lg:px-0">
            <div className="flex-shrink-0 flex items-center">
              <img className="block h-8 w-auto"
                src="/img/logo.svg"
                alt="Workflow"/>
            </div>
          </div>
          <div
            className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
            <Search />
          </div>
          <div className="relative z-10 flex items-center lg:hidden">
            <button onClick={this.props.toggleMenu}
              className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-500 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900">
              <span className="sr-only">Open menu</span>

              <svg className={`h-6 w-6 ${menuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor"
                aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>

              <svg className={`h-6 w-6 ${menuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor"
                aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div
            className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
            {this.props.header}
          </div>
        </div>
        {this.props.nav}
      </div>
    )
  }
}
