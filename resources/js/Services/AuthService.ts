import {EventEmitter} from 'events';
import Http from './Api/Http';
import User from './Models/User';

export class AuthService extends EventEmitter {
  me?: User;

  public get authToken(): string|null {
    return localStorage.getItem('auth-token');
  }

  public set authToken(token: string|null) {
    localStorage.setItem('auth-token', token);

    Http.token = token;
  }

  public get isAuthed(): boolean {
    return this.authToken !== null;
  }

  public get user(): User {
    if (!this.me) {
      this.me = new User(JSON.parse(localStorage.getItem('user')));
    }

    return this.me;
  }
}

const temp = new AuthService;

/** @ts-ignore */
window.auth = temp;

export default temp;
