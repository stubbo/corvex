export interface UserResponse {
  username: string;
  avatar: string;
}

export default class User {
  username: string;
  avatar: string;

  constructor(data: UserResponse) {
    this.username = data.username;
    this.avatar = data.avatar;
  }
}
