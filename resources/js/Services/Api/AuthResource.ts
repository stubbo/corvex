import ApiResource from 'Api/ApiResource';
import {AuthMethods} from 'Services/AuthService';

export interface AuthUrlResponse {
  data: {
    auth_url: string;
  };
}

class AuthResource extends ApiResource {
  public base_uri = '/auth/';

  requestAuth(authType: keyof AuthMethods) {
    return this.show<AuthUrlResponse>(authType, {
      validateStatus: () => true,
    });
  }

  logout() {
    return this.post(this.base_uri + 'logout');
  }
}

export default new AuthResource;
