import React, {Component} from 'react';
import {
  TopHeaderProps,
} from './TopHeader/AuthedTopHeader';
import {GuestTopHeader} from 'Layout/Header/TopHeader/GuestTopHeader';
import GuestBottomHeader from 'Layout/Header/BottomHeader/GuestBottomHeader';

export default class GuestHeader extends Component<TopHeaderProps> {
  public render() {
    return (
      <>
        <GuestTopHeader {...this.props} />
        <GuestBottomHeader menuOpen={this.props.menuOpen} />
      </>
    );
  }
}
