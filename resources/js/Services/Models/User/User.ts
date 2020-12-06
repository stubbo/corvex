export interface UserResponse {
  id: string;
  username: string;
  avatar: string;
}

export default class User {
  data: {
    id: string;
    username: string;
    avatar: string;
  }

  constructor({id, username, avatar}: UserResponse) {
    this.data = {id, username, avatar};
  }

  public static collection(data: UserResponse[]): User[] {
    return data.map((response) => new User(response));
  }
}
