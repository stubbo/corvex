import React, {ReactNode} from 'react';
import Layout from 'Layout/index';
import Page from 'Layout/Page';
import {faKey} from '@fortawesome/free-solid-svg-icons';
import BasePage from 'Layout/Page/BasePage';
import AuthService from 'Services/AuthService';
import {Redirect} from 'react-router-dom';

export default class Logout extends BasePage<unknown, {redirect?: string}> {
  static shouldRender(): boolean {
    return AuthService.isAuthed;
  }

  static route = {
    name: 'Logout',
    route: '/logout',
    component: Logout,
    icon: faKey,
    shouldRender: Logout.shouldRender,
    topNav: false,
  };

  public async componentDidMount(): Promise<void> {
    await AuthService.logout();

    await this.stateUpdate({
      redirect: '/'
    });
  }

  render(): ReactNode {
    if (this.state?.redirect) {
      return (<Redirect to={this.state.redirect} />);
    }

    return (
      <Layout>
        <Page>
        </Page>
      </Layout>
    );
  }
}
