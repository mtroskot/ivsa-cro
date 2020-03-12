import { FIRE_API_KEY } from 'src/constants/keys';

/**
 * Authenticates user on firebase
 * @param {object} authData The authentication data used to authenticate user in firebase
 * @return {object} The response of firebase authentication.
 * @throws error in case of response status not 200
 */
const authenticate = (email, password) => ({
  url: `v3/relyingparty/verifyPassword?key=${FIRE_API_KEY}`,
  options: {
    method: 'POST',
    baseURL: 'https://www.googleapis.com/identitytoolkit/',
    headers: {
      'Content-Type': 'application/json'
    },
    data: { email, password }
  }
});

export default {
  authenticate
};
