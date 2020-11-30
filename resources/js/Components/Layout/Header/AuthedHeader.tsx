import React, {Component} from 'react';
import {
  AuthedTopHeader,
  TopHeaderProps,
} from './TopHeader/AuthedTopHeader';
import AuthedBottomHeader from 'Layout/Header/BottomHeader/AuthedBottomHeader';

export default class AuthedHeader extends Component<TopHeaderProps> {
  public render() {
    return (
      <>
        <AuthedTopHeader {...this.props} />
        <AuthedBottomHeader menuOpen={this.props.menuOpen} />
      </>
    );
  }
}
