import React from 'react';
import BasePage from 'Layout/Page/BasePage';
import Layout from 'Layout/index';
import Page from 'Layout/Page';
import {faHome} from '@fortawesome/free-solid-svg-icons';

export default class Index extends BasePage {
  static route = {
    name: 'Home',
    route: '/',
    component: Index,
    icon: faHome,
    shouldRender: (): true => true,
    topNav: true,
  };

  render(): React.ReactNode | undefined {
    return (
      <Layout>
        <Page>
          Index Page
        </Page>
      </Layout>
    );
  }
}
