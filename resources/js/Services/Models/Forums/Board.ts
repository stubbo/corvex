import Api from 'Api/Forums/ForumResource';
import {AxiosRequestConfig} from 'axios';
import {PaginatedResource} from 'Api/ApiResource';
import {
  IconDefinition,
} from '@fortawesome/fontawesome-svg-core';
import Forum from './Forum';
import FindIcon from 'Services/FindIcon';

interface BoardData {
  id: string;
  title: string;
  description: string;
  icon: string | IconDefinition;
  boards: Board[];
  parent: Forum | Board;
}

export interface BoardResponse {
  data: BoardData
}

export default class Board implements BoardData {
  id: string;
  title: string;
  description: string;
  icon: IconDefinition;
  boards: Board[];
  parent: Forum | Board;

  constructor(data: BoardData) {
    for (const boardKey in data) {
      if (!data.hasOwnProperty(boardKey)) continue;

      const value = data[boardKey];
      if (boardKey === 'icon') {
        this.icon = FindIcon(value);
        continue;
      }
      console.log(boardKey);

      if (boardKey === 'boards' && value.length > 0) {
        this.boards = Board.collection(value);
        continue;
      }

      if (boardKey === 'parents') {
        this.parent = value.parent_id ? new Board(value) : new Forum(value);
        continue;
      }

      this[boardKey] = value;
    }
  }

  public static collection(data: BoardData[]): Board[] {
    console.log('fuck');
    return data.map((response) => new Board(response));
  }

  public static async fetch(config?: AxiosRequestConfig): Promise<Board[]> {
    return Board.collection(
      (await Api.fetch<PaginatedResource<BoardData>>(config)).data.data,
    );
  }

  public static async show(id: string, config?: AxiosRequestConfig): Promise<Board> {
    return new Board((await Api.show<BoardResponse>(id, config)).data.data);
  }

  toString(): string {
    return JSON.stringify(this);
  }
}
