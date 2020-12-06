import React, {Component, PropsWithChildren, ReactNode} from 'react';
import PageNav from './PageNav';

export interface PageProps {
  hasSideNav?: boolean
}

export default class Page extends Component<PropsWithChildren<PageProps>> {
  public render(): ReactNode {
    const {children, hasSideNav = false} = this.props;

    return (
      <>
        {hasSideNav && <PageNav/>}

        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-full">
          {children}
        </div>
      </>
    );
  }
}
