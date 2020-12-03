export interface UserResponse {
  id: string;
  username: string;
  avatar: string;
}

export default class User {
  id: string;
  username: string;
  avatar: string;

  constructor(data: UserResponse) {
    this.id = data.id;
    this.username = data.username;
    this.avatar = data.avatar;
  }
}
