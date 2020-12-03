import React, {ReactNode} from 'react';
import Layout from 'Layout/index';
import Page from 'Layout/Page';
import {faKey} from '@fortawesome/free-solid-svg-icons';
import BasePage from 'Layout/Page/BasePage';

export default class Login extends BasePage {
  static get shouldRender(): boolean {
    return true;
  }

  static route = {
    name: 'Login',
    route: '/login',
    component: Login,
    icon: faKey,
    shouldRender: Login.shouldRender,
    topNav: true,
  };

  render(): ReactNode {
    return (
      <Layout>
        <Page>

        </Page>
      </Layout>
    );
  }
}
