import MeResource from 'Api/User/MeResource';

export interface MeResponse {
  data: MeData
}

interface MeData {
  id: string;
  username: string;
  avatar: string;
}

export default class Me implements MeData {
  id: string;
  username: string;
  avatar: string;

  constructor({data: {id, username, avatar}}: MeResponse) {
    this.id = id;
    this.username = username;
    this.avatar = avatar;
  }

  public static async fetch(): Promise<Me> {
    return new Me((await MeResource.fetch<MeResponse>()).data);
  }

  toString(): string {
    return JSON.stringify(this);
  }
}
