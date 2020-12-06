import MeResource from 'Api/User/MeResource';

export interface MeResponse {
  data: {
    id: string;
    username: string;
    avatar: string;
  }
}

export default class Me {
  data: {
    id: string;
    username: string;
    avatar: string;
  }

  constructor({data: {id, username, avatar}}: MeResponse) {
    this.data = {id, username, avatar};
  }

  public static async fetch(): Promise<Me> {
    return new Me((await MeResource.fetch<MeResponse>()).data);
  }

  toString(): string {
    return JSON.stringify(this.data);
  }
}
