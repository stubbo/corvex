import React, {Component, PropsWithChildren, ReactNode} from 'react';
import PageNav from './PageNav';

export default class Page extends Component<PropsWithChildren<unknown>> {
  public render(): ReactNode {
    return (
      <>
        <PageNav/>

        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
          {this.props.children}
        </div>
      </>
    );
  }
}
