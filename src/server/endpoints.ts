import { Endpoint } from '../common/models';

export interface StringToEndpoint {
  [s: string]: Endpoint;
}

const endpoints: StringToEndpoint = {
  fetchLoggedInUser: {
    url: '/api/utility/user-info'
  }
};

export default endpoints;
