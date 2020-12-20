import React, {ReactNode} from 'react';
import {RouteComponentProps as Route} from 'react-router';
import BasePage from 'Layout/Page/BasePage';
import Layout from 'Layout/index';
import Page from 'Layout/Page';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import Breadcrumbs from 'Layout/Breadcrumbs';
import Board, {BoardBreadcrumb} from 'Services/Models/Forums/Board';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export interface BoardProps {
  forum?: string;
  board: string;
}

export interface BoardState {
  loading: boolean;
  board?: Board;
}

export default class ShowBoard extends BasePage<Route<BoardProps>, BoardState> {
  static route = {
    name: 'Board',
    route: ['/boards/:board', '/forums/:forum/boards/:board'],
    component: ShowBoard,
    icon: faHome,
    shouldRender: (): true => true,
    topNav: false,
  };

  state = {
    loading: true,
    board: undefined,
  };

  componentDidMount(): void {
    this.fetchData();
  }

  componentDidUpdate(prevProps: Readonly<Route<BoardProps>>): void {
    if (prevProps.match.params.board !== this.props.match.params.board)
    this.fetchData();
  }

  fetchData = async (): Promise<void> => {
    await this.stateUpdate<Partial<BoardState>>({
      loading: true,
    });

    const {board, forum} = this.props.match.params;
    const filters = {};

    if (forum) {
      filters['filter[parent_id]'] = forum;
    }

    await this.stateUpdate<Partial<BoardState>>({
      loading: false,
      board: await Board.show(board, {
        params: {
          include: 'children',
          ...filters
        },
      }),
    });
  }

  renderBoard = (board: Board = this.state.board, k?: number): ReactNode => {
    if (!board || !(board instanceof Board)) return;

    return (
      <li key={k}>
        <Link to={`/boards/${board.slug ?? board.id}`}
          className="block hover:bg-gray-50 dark:hover:bg-gray-700 pl-5">
          <div className="flex items-center px-4 py-4 sm:px-6">
            <div className="min-w-0 flex-1 flex items-center">
              <div className="flex-shrink-0">
                <FontAwesomeIcon size='2x' fixedWidth icon={board.icon}
                  className="h-12 w-12 rounded-full"/>
              </div>
              <div className="min-w-0 flex-1 px-4 flex">
                <div className="flex-1 w-full">
                  <p
                    className="text-lg font-medium truncate capitalize">
                    {board.title}
                  </p>
                  <p className="flex items-center text-sm text-gray-400">
                    <span className="truncate">
                      {board.description}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </li>
    );
  }

  render(): ReactNode | undefined {
    const {board: boardParam} = this.props.match.params;
    const {board} = this.state;

    let crumbs = [
      {
        display: 'Loading',
        link: ''
      }
    ];
    if (board) {
      crumbs = board.breadcrumbs.map(({id, title, type}: BoardBreadcrumb) => ({
        display: title,
        link: (type === 'forum' ? '/forums/' : '/boards/') + id
      }));
    }

    return (
      <Layout>
        <Page>
          <Breadcrumbs crumbs={[...crumbs.reverse(),
            {
              display: this.state?.board?.title ?? boardParam,
              link: `/boards/${boardParam}`,
            },
          ]}/>


          {this.state.loading && <div>
            <div className="loader mt-12 text-gray-700 dark:text-white"/>
          </div>}

          {!this.state.loading && <>
            <div
              className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md mb-2">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {this.renderBoard()}
                {board.children && board.children.map(this.renderBoard)}
              </ul>
            </div>
          </>}
        </Page>
      </Layout>
    );
  }
}
