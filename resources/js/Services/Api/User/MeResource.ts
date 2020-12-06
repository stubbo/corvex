import ApiResource from 'Api/ApiResource';

class MeResource extends ApiResource {
  public base_uri = '/users/me/';
}

export default new MeResource();
