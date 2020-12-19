import Api from 'Api/Forums/ForumResource';
import {AxiosRequestConfig} from 'axios';
import {PaginatedResource} from 'Api/ApiResource';
import {
  IconDefinition,
} from '@fortawesome/fontawesome-svg-core';
import Board from './Board';
import FindIcon from 'Services/FindIcon';

interface ForumData {
  id: string;
  title: string;
  description: string;
  icon: string;
  boards: Board[];
}

export interface ForumResponse {
  data: ForumData
}

export default class Forum {
  id: string;
  title: string;
  description: string;
  icon: IconDefinition;
  boards: Board[];

  constructor(data: ForumData) {
    for (const forumKey in data) {
      if (!data.hasOwnProperty(forumKey)) continue;

      const value = data[forumKey];
      if (forumKey === 'icon') {
        this.icon = FindIcon(value);
        continue;
      }

      if (forumKey === 'boards' && value.length > 0) {
        this.boards = Board.collection(value);
        continue;
      }

      this[forumKey] = value;
    }
  }

  public static collection(data: ForumData[]): Forum[] {
    return data.map((response) => new Forum(response));
  }

  public static async fetch(config?: AxiosRequestConfig): Promise<Forum[]> {
    return Forum.collection(
      (await Api.fetch<PaginatedResource<ForumData>>(config)).data.data,
    );
  }

  public static async show(id: string, config?: AxiosRequestConfig): Promise<Forum> {
    return new Forum((await Api.show<ForumResponse>(id, config)).data.data);
  }

  toString(): string {
    return JSON.stringify(this);
  }
}
