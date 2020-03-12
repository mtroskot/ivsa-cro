import axios from 'axios';
const CancelToken = axios.CancelToken;

const defaultOptions = {
  baseURL: 'https://ivsa-croatia-1543694793188.firebaseio.com/',
  headers: {
    Accept: 'application/json'
  },
  validateStatus(status) {
    return status === 200; // Accept only status code 200
  },
  timeout: 5000
};

/**
 * Calls api and returns response data if status OK.
 * setTimeout needed for android to cancel request, if you don't have internet connection or the IP address or
 * domain name that you're requesting not there,in this case axios timeout will not work.
 * @param {string} url The api endpoint.
 * @param {object} options The request options.
 * @returns {Promise<AxiosResponse<any>>}
 */
async function callApiAndCheckResponse({ url, options }) {
  let source = CancelToken.source();
  setTimeout(() => {
    source.cancel();
  }, 6000);
  const fetchOptions = { ...defaultOptions, cancelToken: source.token, ...options };
  const response = await axios(url, fetchOptions);
  return response.data;
}

/**
 * Calls api without checking the response and returns whole response
 * @param url The api endpoint
 * @param options The request options.
 * @returns {Promise<AxiosResponse<any>>}
 */
async function callApi({ url, options }) {
  let source = CancelToken.source();
  setTimeout(() => {
    source.cancel();
  }, 6000);
  const fetchOptions = { ...defaultOptions, ...options, ...{ validate: null } };
  const response = await axios(url, fetchOptions);
  return response;
}

export default {
  callApiAndCheckResponse,
  callApi
};

export { default as bookletRequests } from 'src/services/api/booklet';
export { default as newsRequests } from 'src/services/api/news';
export { default as notificationRequests } from 'src/services/api/notification';
export { default as userRequests } from 'src/services/api/user';
