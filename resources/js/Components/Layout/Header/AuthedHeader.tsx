import React, {Component, ReactNode} from 'react';
import {
  AuthedTopHeader,
  TopHeaderProps,
} from './TopHeader/AuthedTopHeader';
import AuthedBottomHeader from 'Layout/Header/BottomHeader/AuthedBottomHeader';

export default class AuthedHeader extends Component<TopHeaderProps> {
  public render(): ReactNode {
    return (
      <>
        <AuthedTopHeader {...this.props} />
        <AuthedBottomHeader menuOpen={this.props.menuOpen}/>
      </>
    );
  }
}
