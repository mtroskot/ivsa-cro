import { ONESIGNAL_APP_ID, ONESIGNAL_REST_API_KEY } from 'src/constants/keys';

/**
 * Pushes notification to all users
 * @param {string} title The title of notification.
 * @param {string} message The message of notification.
 * @param {object} additionalData The additionalData of notification.
 */
const publishNews = (title, message, additionalData) => ({
  url: `notifications`,
  options: {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic <${ONESIGNAL_REST_API_KEY}>`
    },
    data: {
      app_id: ONESIGNAL_APP_ID,
      included_segments: ['All'],
      headings: { en: title },
      contents: { en: message },
      data: additionalData
    }
  }
});

export default {
  publishNews
};
