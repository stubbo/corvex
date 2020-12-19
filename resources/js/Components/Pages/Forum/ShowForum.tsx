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
  forum: string;
}

export interface ForumState {
  forum: ForumModel,
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
    forum: null,
  };

  componentDidMount(): void {
    this.fetchData();
  }

  fetchData = async (): Promise<void> => {
    const forum = await ForumModel.show(this.props.match.params.forum, {
      params: {
        include: 'boards',
      },
    });

    this.setState({
      forum: forum,
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
              link: '/forums'
            },
            {
              display: this.state?.forum?.title ?? forumParam,
              link: `/forums/${forumParam}`
            },
          ]}/>

          <ForumList forums={forum}/>
        </Page>
      </Layout>
    );
  }
}
