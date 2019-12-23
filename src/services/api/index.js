import { FIRE_API_KEY, FIRE_DB_KEY, ONESIGNAL_REST_API_KEY, ONESIGNAL_APP_ID } from 'src/constants/onesignal';

/**
 * Calls api and checks if response status is OK.
 * @param {string} url The api endpoint.
 * @param {object} options The request options.
 * @param {string} failMessage The message that will be thrown is response status is not OK.
 * @throws error if response status is not OK.
 */
function callApiAndCheckResponse(url, options, failMessage) {
  return fetch(url, options).then(response => {
    if (response.status !== 200) {
      throw failMessage;
    } else {
      return response.json();
    }
  });
}

/**
 * Authenticates user on firebase
 * @param {object} authData The authentication data used to authenticate user in firebase
 * @return {object} The response of firebase authentication.
 * @throws error in case of response status not 200
 */
function authenticate(email, password) {
  console.log('', email, password);
  const url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${FIRE_API_KEY}`;
  const options = {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const failMessage = 'Authentication fail';
  return callApiAndCheckResponse(url, options, failMessage);
}

/**
 *Publishes notice to firebase
 * @param {object} newsData The notice data that will be stored in firebase
 * @return {object} The response of firebase publishNews.
 * @throws error in case of response status not 200
 */
function publishNews(newsData) {
  const url = `https://ivsa-croatia-1543694793188.firebaseio.com/posts.json?auth=${FIRE_DB_KEY}`;
  const options = {
    method: 'POST',
    body: JSON.stringify(newsData),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const failMessage = 'Publish notice fail';
  return callApiAndCheckResponse(url, options, failMessage);
}

/**
 * Pushes notification to all users
 * @param {string} title The title of notification.
 * @param {string} message The message of notification.
 * @param {object} additionalData The additionalData of notification.
 */
function pushNotification(title, message, additionalData) {
  const url = 'https://onesignal.com/api/v1/notifications';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic <${ONESIGNAL_REST_API_KEY}>`
    },
    body: JSON.stringify({
      app_id: ONESIGNAL_APP_ID,
      included_segments: ['All'],
      headings: { en: title },
      contents: { en: message },
      data: additionalData
    })
  };
  const failMessage = 'Push Notification fail';
  return callApiAndCheckResponse(url, options, failMessage);
}

/**
 * Retrieves news from firebase
 * @return {object} The response of firebase getNews.
 */
function getNews() {
  const url = `https://ivsa-croatia-1543694793188.firebaseio.com/posts.json`;
  const failMessage = 'Get news fail';
  return callApiAndCheckResponse(url, null, failMessage);
}

/**
 * Retrieves booklet url from firebase
 * @return {object} The response of firebase getBeooklet.
 */
function getBookletUrl() {
  const url = `https://ivsa-croatia-1543694793188.firebaseio.com/bookletUrl.json`;
  const failMessage = 'Get booklet fail';
  return callApiAndCheckResponse(url, null, failMessage);
}

/**
 * Deletes notice by id from firebase
 * @param {String} noticeId The id of notice in firebase
 */
function deleteNews(noticeId) {
  const url = `https://ivsa-croatia-1543694793188.firebaseio.com/posts/${noticeId}.json?auth=${FIRE_DB_KEY}`;
  const options = {
    method: 'DELETE'
  };
  const failMessage = 'Delete notice fail';
  return callApiAndCheckResponse(url, options, failMessage);
}

/**
 * Updates a notice by id in firebase
 * @param {String} noticeId The id of notice in firebase
 * @param {Object} noticeData The updated noticeData
 * @return {Object} The response of firebase updateNews.
 * @throws error in case of response status not 200
 */
function updateNews(noticeId, noticeData) {
  const url = `https://ivsa-croatia-1543694793188.firebaseio.com/posts/${noticeId}.json?auth=${FIRE_DB_KEY}`;
  const options = {
    method: 'PUT',
    body: JSON.stringify(noticeData),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const failMessage = 'Update notice fail';
  return callApiAndCheckResponse(url, options, failMessage);
}

export default {
  authenticate,
  publishNews,
  pushNotification,
  getNews,
  getBookletUrl,
  deleteNews,
  updateNews
};
