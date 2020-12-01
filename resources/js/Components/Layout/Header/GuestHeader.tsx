import React, {Component, ReactNode} from 'react';
import {
  TopHeaderProps,
} from './TopHeader/AuthedTopHeader';
import {GuestTopHeader} from 'Layout/Header/TopHeader/GuestTopHeader';
import GuestBottomHeader from 'Layout/Header/BottomHeader/GuestBottomHeader';

export default class GuestHeader extends Component<TopHeaderProps> {
  public render(): ReactNode {
    return (
      <>
        <GuestTopHeader {...this.props} />
        <GuestBottomHeader menuOpen={this.props.menuOpen} />
      </>
    );
  }
}
