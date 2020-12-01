import React, {Component, PropsWithChildren, ReactNode} from 'react';

export default class ContentSection extends Component<PropsWithChildren<unknown>> {
  public render(): ReactNode {
    return (
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="bg-white py-6 px-4 sm:p-6">
          {this.props.children}
        </div>
      </div>
    );
  }
}
