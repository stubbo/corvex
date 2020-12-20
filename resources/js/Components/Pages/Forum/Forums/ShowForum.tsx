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
  forum: string;
}

export interface ForumState {
  loading: boolean;
  forum: ForumModel;
}

export default class ShowForum extends BasePage<Route<ForumProps>, ForumState> {
  static route = {
    name: 'Home',
    route: '/forums/:forum',
    component: ShowForum,
    icon: faHome,
    shouldRender: (): true => true,
    topNav: false,
  };

  state = {
    loading: true,
    forum: null,
  };

  componentDidMount(): void {
    this.fetchData();
  }

  fetchData = async (): Promise<void> => {
    await this.stateUpdate<Partial<ForumState>>({
      loading: true,
    });

    await this.stateUpdate<Partial<ForumState>>({
      loading: false,
      forum: await ForumModel.show(this.props.match.params.forum, {
        params: {
          include: 'boards',
        },
      })
    });
  }

  render(): ReactNode | undefined {
    const {forum: forumParam} = this.props.match.params;
    let {forum = []} = this.state;
    if (!Array.isArray(forum)) {
      forum = forum ? [forum] : [];
    }

    return (
      <Layout>
        <Page>
          <Breadcrumbs crumbs={[
            {
              display: 'Forums',
              link: '/forums',
            },
            {
              display: this.state?.forum?.title ?? forumParam,
              link: `/forums/${forumParam}`,
            },
          ]}/>


          {this.state.loading && <div>
            <div className="loader mt-12 text-gray-700 dark:text-white"/>
          </div>}

          {!this.state.loading && <ForumList forums={forum}/>}
        </Page>
      </Layout>
    );
  }
}
