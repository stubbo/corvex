import React, {Component, ReactNode} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Board from 'Services/Models/Forums/Board';

interface BoardListProps {
  boards: Board[]
}

export default class BoardList extends Component<BoardListProps> {
  render(): ReactNode {
    return this.props.boards.map((board, k) => (
      <li key={k}>
        <a href="#"
          className="block hover:bg-gray-50 dark:hover:bg-gray-700 pl-5">
          <div className="flex items-center px-4 py-4 sm:px-6">
            <div className="min-w-0 flex-1 flex items-center">
              <div className="flex-shrink-0">
                <FontAwesomeIcon size='2x' fixedWidth
                  className="h-12 w-12 rounded-full" icon={board.icon}/>
              </div>
              <div className="min-w-0 flex-1 px-4 flex">
                <div className="flex-1 w-full">
                  <p className="text-lg font-medium truncate capitalize">
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
    ));
  }
}
