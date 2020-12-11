import {EventEmitter} from 'events';
import Http from './Api/Http';
import AuthResource, {AuthUrlResponse} from 'Api/AuthResource';
import Me from './Models/User/Me';

interface LoginSuccess extends AuthUrlResponse {
  success: true;
}

interface LoginError {
  success: false;
}

export type LoginAttempt = LoginSuccess | LoginError;

export interface AuthMethods {
  steam: boolean;
  discord: boolean;
}

export class AuthService extends EventEmitter {
  me?: Me;

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

  public get user(): Me {
    if (!this.me) {
      this.me = new Me(JSON.parse(localStorage.getItem('user')));
    }

    return this.me;
  }

  public async fetchMe(): Promise<Me> {
    this.me = await Me.fetch();

    localStorage.setItem('user', this.me.toString());

    return this.me;
  }

  public async login(method: keyof AuthMethods): Promise<LoginAttempt> {
    const loginResponse = await AuthResource.requestAuth(method);

    if (loginResponse.status !== 200) {
      return {
        success: false,
      };
    }

    return {
      success: true,
      ...loginResponse.data,
    };
  }

  public async logout(): Promise<void> {
    if (!this.isAuthed) return;

    AuthResource.logout();
    this.authToken(null);
    this.emit('logout');
  }

  authMethods(): AuthMethods {
    return {
      steam: process.env.MIX_STEAM_AUTH_ENABLED === 'true',
      discord: process.env.MIX_DISCORD_AUTH_ENABLED === 'true',
    };
  }
}

export default new AuthService;
