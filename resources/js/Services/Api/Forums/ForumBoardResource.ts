import ApiResource from 'Api/ApiResource';

class ForumBoardResource extends ApiResource {
  public base_uri = '/boards/';

  uri(forum: string): string {
    return this.base_uri.replace(':forum', forum);
  }
}

export default new ForumBoardResource();
