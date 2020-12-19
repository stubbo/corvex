import React, {ReactNode} from 'react';
import {RouteComponentProps as Route} from 'react-router';
import BasePage from 'Layout/Page/BasePage';
import Layout from 'Layout/index';
import Page from 'Layout/Page';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import Breadcrumbs from 'Layout/Breadcrumbs';
import ForumModel from 'Services/Models/Forums/Forum';
import ForumList from 'Components/Pages/Forum/ForumList';

export interface ForumProps {
  forum?: string;
}

export interface ForumsState {
  forums: ForumModel[],
}

export default class Forums extends BasePage<Route<ForumProps>, ForumsState> {
  static route = {
    name: 'Home',
    route: '/forums',
    component: Forums,
    icon: faHome,
    shouldRender: (): true => true,
    topNav: true,
  };

  state = {
    forums: [],
  };

  componentDidMount(): void {
    this.fetchData();
  }

  fetchData = async (): Promise<void> => {
    const forums = await ForumModel.fetch({params: {include: 'boards'}});
    this.setState({
      forums,
    });
  }

  render(): ReactNode {
    return (
      <Layout>
        <Page>
          <Breadcrumbs crumbs={[{display: 'Forums', link: '/'}]}/>

          <ForumList forums={this.state.forums}/>
        </Page>
      </Layout>
    );
  }
}
