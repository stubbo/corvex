import Axios, {AxiosInstance} from 'axios';

export class Http {
  public axios: AxiosInstance;

  constructor() {
    const headers = {};

    const token = localStorage.getItem('auth-token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    this.axios = Axios.create({
      baseURL: '/api/v1/',
      headers,
    });
  }

  set token(token: string|null) {
    if (token === null && this.axios.defaults.headers['Authorization']) {
      delete this.axios.defaults.headers['Authorization'];
    } else {
      this.axios.defaults.headers['Authorization'] = `Bearer ${token}`;
    }
  }
}

export default new Http;
