import Http from './Http';
import {
  AxiosPromise, AxiosRequestConfig  as Config
} from 'axios';

export default abstract class ApiResource {
  abstract base_uri: string;

  protected get<R>(url: string, config?: Config): AxiosPromise<R> {
    return Http.axios.get(url, config);
  }

  protected delete<R>(url: string, config?: Config): AxiosPromise<R> {
    return Http.axios.delete(url, config);
  }

  protected head<R>(url: string, config?: Config): AxiosPromise<R> {
    return Http.axios.head(url, config);
  }

  protected options<R>(url: string, config?: Config): AxiosPromise<R> {
    return Http.axios.options(url, config);
  }

  protected post<R>(url: string, data?: unknown, config?: Config): AxiosPromise<R> {
    return Http.axios.post(url, data, config);
  }

  protected put<R>(url: string, data?: unknown, config?: Config): AxiosPromise<R> {
    return Http.axios.post(url, data, config);
  }

  protected patch<R>(url: string, data?: unknown, config?: Config): AxiosPromise<R> {
    return Http.axios.post(url, data, config);
  }

  public fetch<R>(config?: Config): AxiosPromise<R> {
    return this.get<R>(this.base_uri, config);
  }

  public show<R>(id: string, config?: Config): AxiosPromise<R> {
    return this.get<R>(this.base_uri + id, config);
  }
}
