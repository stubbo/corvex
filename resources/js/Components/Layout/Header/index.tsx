import React, {Component, ReactNode} from 'react';
import AuthService from 'Services/AuthService';
import GuestHeader from 'Layout/Header/GuestHeader';
import AuthedHeader from 'Layout/Header/AuthedHeader';

interface HeaderState {
  authed: boolean;
  menuOpen: boolean;
}

export default class Header extends Component<unknown, HeaderState> {
  state = {
    authed: AuthService.isAuthed,
    menuOpen: false,
  };

  public componentDidMount(): void {
    AuthService.on('change', this.checkAuth);
  }

  public componentWillUnmount(): void {
    AuthService.removeListener('change', this.checkAuth);
  }

  checkAuth = (): void => {
    this.setState({
      authed: AuthService.isAuthed,
    });
  };

  toggleMenu = (): void => {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  };

  public render(): ReactNode {
    const {authed, menuOpen} = this.state;

    return (
      <header className="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 relative z-10 shadow-xl">
        {!authed && <GuestHeader toggleMenu={this.toggleMenu} menuOpen={menuOpen}/>}
        {authed && <AuthedHeader toggleMenu={this.toggleMenu} menuOpen={menuOpen}/>}
      </header>
    );
  }
}
