import React, {Component, PropsWithChildren} from 'react';

export default class ContentSection extends Component<PropsWithChildren<{}>> {
  public render() {
    return (
      <div className="shadow sm:rounded-md sm:overflow-hidden bg-white dark:bg-gray-800">
        <div className="py-6 px-4 sm:p-6">
          {this.props.children}
        </div>

        <div className="px-4 py-3 bg-gray-50 dark:bg-gray-900 dark:bg-opacity-30 text-right sm:px-6">
          <button className="bg-gray-800 dark:bg-gray-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-800 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
            Save
          </button>
        </div>
      </div>
    )
  }
}
