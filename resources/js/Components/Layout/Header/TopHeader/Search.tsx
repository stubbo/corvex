import React, {Component, ReactNode} from 'react';

export default class Search extends Component {
  handleSearch = (): void => {
    // todo: implement system searching
  };

  public render(): ReactNode {
    return (
      <div className="max-w-xs w-full">
        <label htmlFor="search" className="sr-only">Search</label>
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
            <svg className="flex-shrink-0 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"/>
            </svg>
          </div>
          <input name="search" id="search" onChange={this.handleSearch}
            className="block w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 dark:focus:text-gray-100 focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 sm:text-sm dark:shadow-xl"
            placeholder="Search" type="search"/>
        </div>
      </div>
    );
  }
}
