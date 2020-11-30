import React, {Component} from 'react';
import GenericBottomHeader, {
  BottomHeaderProps as Props,
} from 'Layout/Header/BottomHeader/GenericBottomHeader';

export default class AuthedBottomHeader extends Component<Props> {
  renderHeader() {
    return (
      <div className="px-4 flex items-center">
        <div className="flex-shrink-0">
          <img className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            alt=""/>
        </div>
        <div className="ml-3">
          <div
            className="text-base font-medium text-gray-800 dark:text-gray-200">
            Lisa Marie
          </div>
          <div
            className="text-sm font-medium text-gray-500 dark:text-gray-400">
            lisamarie@example.com
          </div>
        </div>
        <button
          className="ml-auto flex-shrink-0 bg-white dark:bg-gray-700 rounded-full p-1 text-gray-400 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400">
          <span className="sr-only">View notifications</span>
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
            aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
          </svg>
        </button>
      </div>
    );
  }

  public render() {
    return (
      <GenericBottomHeader header={this.renderHeader()} {...this.props} />
    )
  }
}
