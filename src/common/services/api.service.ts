import endpoints from '../../server/endpoints';

class ApiService {
  public getOptions(key: string) {
    return endpoints[key];
  }
}

export default new ApiService();
