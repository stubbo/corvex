import React, {Component, ReactNode} from 'react';
import Layout from 'Layout/index';
import Page from 'Layout/Page';

export default class Login extends Component {
  static get shouldRender(): boolean {
    return true;
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
