import React, {ReactNode} from 'react';
import BasePage from 'Layout/Page/BasePage';
import Layout from 'Layout/index';
import Page from 'Layout/Page';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import Breadcrumbs from 'Layout/Breadcrumbs';
import ForumModel from 'Services/Models/Forums/Forum';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Board from 'Services/Models/Forums/Board';

export interface ForumsState {
  forums: ForumModel[],
}

export default class Forum extends BasePage<unknown, ForumsState> {
  static route = {
    name: 'Home',
    route: '/forums',
    component: Forum,
    icon: faHome,
    shouldRender: (): true => true,
    topNav: true,
  };

  state = {
    forums: [],
  };

  componentDidMount(): void {
    ForumModel.fetch({params: {include: 'boards'}}).then((forums) => {
      this.setState({
        forums,
      });
    });
  }

  renderBoard = (board: Board, k: number): ReactNode => {
    return (
      <li key={k}>
        <a href="#"
          className="block hover:bg-gray-50 dark:hover:bg-gray-700 pl-5">
          <div className="flex items-center px-4 py-4 sm:px-6">
            <div className="min-w-0 flex-1 flex items-center">
              <div className="flex-shrink-0">
                <FontAwesomeIcon size='2x' fixedWidth className="h-12 w-12 rounded-full"
                  icon={board.icon}/>
              </div>
              <div className="min-w-0 flex-1 px-4 flex">
                <div className="flex-1 w-full">
                  <p className="text-lg font-medium truncate">
                    {board.title}
                  </p>
                  <p className="flex items-center text-sm text-gray-400">
                    <span className="truncate">
                      {board.description}
                    </span>
                  </p>
                </div>
                <div
                  className="hidden md:block text-sm text-gray-900 dark:text-gray-300">
                  <div>
                    <p className="mt-2 flex items-center">
                      Some Thread
                    </p>
                    <p className="">
                      Updated <time dateTime="2020-01-07">January 7, 2020</time>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </li>
    );
  }

  renderForum = (forum: ForumModel, k: number): ReactNode => {
    return (
      <div key={k}
        className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md mb-2">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li>
            <a href="#"
              className="block hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="flex-shrink-0">
                    <FontAwesomeIcon size='2x' fixedWidth icon={forum.icon}
                      className="h-12 w-12 rounded-full"/>
                  </div>
                  <div className="min-w-0 flex-1 px-4 flex">
                    <div className="flex-1 w-full">
                      <p className="text-lg font-medium truncate">
                        {forum.title}
                      </p>
                      <p className="flex items-center text-sm text-gray-400">
                        <span className="truncate">
                          {forum.description}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </li>

          {forum.boards.map(this.renderBoard)}
        </ul>
      </div>
    );
  }

  render(): React.ReactNode | undefined {
    return (
      <Layout>
        <Page>
          <Breadcrumbs crumbs={[{display: 'Forums', link: '/'}]}/>

          {this.state.forums.map(this.renderForum)}
        </Page>
      </Layout>
    );
  }
}
