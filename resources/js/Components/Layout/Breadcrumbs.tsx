import React, {Component, ReactNode} from 'react';
import {Link} from 'react-router-dom';

interface BreadcrumbProps {
  crumbs: {
    link: string,
    display: string,
  }[]
}

export default class Breadcrumbs extends Component<BreadcrumbProps> {
  render(): ReactNode {
    return (
      <nav className="bg-white dark:bg-gray-800 md:rounded flex shadow-lg" aria-label="Breadcrumb">
        <ol className="max-w-screen-xl w-full mx-auto px-2 flex space-x-4 sm:px-4 lg:px-6">
          <li className="flex">
            <div className="flex items-center">
              <Link to="/" className="text-gray-400 hover:text-gray-500">
                <svg className="flex-shrink-0 h-5 w-5 w-6 h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                     fill="currentColor" aria-hidden="true">
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                </svg>
                <span className="sr-only">Home</span>
              </Link>
            </div>
          </li>
          {this.props.crumbs.map((crumb, k) => (
            <li key={k} className="flex">
              <div className="flex items-center">
                <svg className="flex-shrink-0 w-6 h-full text-gray-400" viewBox="0 0 24 44" preserveAspectRatio="none"
                     fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"/>
                </svg>
                <Link to={crumb.link} className="breadcrumb-link">{crumb.display}</Link>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    );
  }
}
