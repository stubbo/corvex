import React, {Component} from 'react';
import Layout from 'Layout/index';
import Page from 'Layout/Page';

export default class Login extends Component<{}, {}> {
  static get shouldRender(): boolean {
    return true;
  }

  render() {
    return (
      <Layout>
        <Page>

        </Page>
      </Layout>
    );
  }
}
