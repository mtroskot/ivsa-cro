import { FIRE_DB_KEY } from 'src/constants/keys';

/**
 * Retrieves news from firebase
 * @return {object} The response of firebase getNews.
 */
const getNews = () => ({
  url: `posts.json`
});

/**
 *Publishes notice to firebase
 * @param {object} newsData The notice data that will be stored in firebase
 * @return {object} The response of firebase publishNews.
 * @throws error in case of response status not 200
 */
const publishNews = newsData => ({
  url: `posts.json?auth=${FIRE_DB_KEY}`,
  options: {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: { ...newsData }
  }
});

/**
 * Deletes notice by id from firebase
 * @param {String} noticeId The id of notice in firebase
 */
const deleteNews = noticeId => ({
  url: `posts/${noticeId}.json?auth=${FIRE_DB_KEY}`,
  options: {
    method: 'DELETE'
  }
});

/**
 * Deletes notice by id from firebase
 * @param {String} noticeId The id of notice in firebase
 */
const updateNews = (noticeId, newsData) => ({
  url: `posts/${noticeId}.json?auth=${FIRE_DB_KEY}`,
  options: {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: { ...newsData }
  }
});

export default {
  publishNews,
  getNews,
  deleteNews,
  updateNews
};
