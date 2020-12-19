import React, {Component, PropsWithChildren, ReactNode} from 'react';


export default class Page extends Component<PropsWithChildren<unknown>> {
  public render(): ReactNode {
    const {children} = this.props;

    return (
      <>
        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-12 dark:text-gray-300">
          {children}
        </div>
      </>
    );
  }
}
