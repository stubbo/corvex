import React, {ReactNode} from 'react';
import {RouteComponentProps as Route} from 'react-router';
import BasePage from 'Layout/Page/BasePage';
import Layout from 'Layout/index';
import Page from 'Layout/Page';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import Breadcrumbs from 'Layout/Breadcrumbs';
import ForumModel from 'Services/Models/Forums/Forum';
import ForumList from 'Components/Pages/Forum/Forums/ForumList';

export interface ForumProps {
  forum?: string;
}

export interface ForumsState {
  loading: boolean;
  forums: ForumModel[];
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
    loading: true,
    forums: [],
  };

  componentDidMount(): void {
    this.fetchData();
  }

  fetchData = async (): Promise<void> => {
    await this.stateUpdate<Partial<ForumsState>>({
      loading: true,
    });

    await this.stateUpdate({
      loading: false,
      forums: await ForumModel.fetch({params: {include: 'boards'}}),
    });
  }

  render(): ReactNode {
    return (
      <Layout>
        <Page>
          <Breadcrumbs crumbs={[{display: 'Forums', link: '/'}]}/>

          {this.state.loading && <div>
            <div className="loader mt-12 text-gray-700 dark:text-white"/>
          </div>}
          {!this.state.loading && <ForumList forums={this.state.forums}/>}
        </Page>
      </Layout>
    );
  }
}
