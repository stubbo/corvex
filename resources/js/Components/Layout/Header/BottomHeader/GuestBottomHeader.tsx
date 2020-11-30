import React, {Component} from 'react';
import GenericBottomHeader, {
  BottomHeaderProps as Props
} from 'Layout/Header/BottomHeader/GenericBottomHeader';

export default class GuestBottomHeader extends Component<Props> {
  public render() {
    return (
      <GenericBottomHeader header={null} {...this.props} />
    )
  }
}
