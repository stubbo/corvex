import React, {Component, ReactNode} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Forum from 'Services/Models/Forums/Forum';
import BoardList from 'Components/Pages/Forum/Boards/BoardList';
import {Link} from 'react-router-dom';

interface ForumListProps {
  forums: Forum[]
}

export default class ForumList extends Component<ForumListProps> {
  render(): ReactNode {
    return this.props.forums.map((forum, k) => (
      <div key={k}
        className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md mb-2">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li>
            <Link to={`/forums/${forum.slug ?? forum.id}`}
              className="block hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="flex-shrink-0">
                    <FontAwesomeIcon size='2x' fixedWidth icon={forum.icon}
                      className="h-12 w-12 rounded-full"/>
                  </div>
                  <div className="min-w-0 flex-1 px-4 flex">
                    <div className="flex-1 w-full">
                      <p className="text-lg font-medium truncate capitalize">
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
            </Link>
          </li>

          <BoardList forum={forum.slug ?? forum.id} boards={forum.boards}/>
        </ul>
      </div>
    ));
  }
}
