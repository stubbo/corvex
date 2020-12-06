import React, {ReactNode} from 'react';
import Layout from 'Layout/index';
import Page from 'Layout/Page';
import {faKey} from '@fortawesome/free-solid-svg-icons';
import BasePage from 'Layout/Page/BasePage';
import AuthService from 'Services/AuthService';
import {RouteComponentProps} from 'react-router';

interface LoginCallbackProps {
  token: string;
}

export default class LoginCallback extends BasePage<RouteComponentProps<LoginCallbackProps>> {
  state = {
    alert: null,
    disabled: false,
  };

  static get shouldRender(): boolean {
    return !AuthService.isAuthed;
  }

  static route = {
    name: 'Login Callback',
    route: '/login/callback/:token',
    component: LoginCallback,
    icon: faKey,
    shouldRender: LoginCallback.shouldRender,
    topNav: false,
  };

  async componentDidMount(): Promise<void> {
    AuthService.authToken(this.props.match.params.token);
    await AuthService.fetchMe();
  }

  render(): ReactNode {
    return (
      <Layout>
        <Page>
        </Page>
      </Layout>
    );
  }
}
