import {EventEmitter} from 'events';
import Http from './Api/Http';
import User from './Models/User';

export class AuthService extends EventEmitter {
  me?: User;

  public authToken = (token?: string | null): string | null => {
    if (token === undefined) {
      const token = localStorage.getItem('auth-token');
      return token !== 'null' ? token : null;
    }

    localStorage.setItem('auth-token', token);
    Http.token = token;

    this.emit('change');
    return token;
  };

  public get isAuthed(): boolean {
    return this.authToken() !== null;
  }

  public get user(): User {
    if (!this.me) {
      this.me = new User(JSON.parse(localStorage.getItem('user')));
    }

    return this.me;
  }
}

export default new AuthService;
