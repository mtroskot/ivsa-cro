import { Platform } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import locales from 'src/constants/localization';

/**
 * Checks if device is connected to internet. Alerts user if no internet connection.
 * @returns {boolean} True if connected,false if not
 */
function isConnectedToInternet() {
  return NetInfo.isConnected.fetch().then(isConnected => {
    if (isConnected) {
      return true;
    } else {
      alert(locales.noInternet);
      return false;
    }
  });
}

/**
 * Return the prefix, based on platform, needed for icon
 * @param iconName
 */
function getIconForPlatform(iconName) {
  const prefix = Platform.OS === 'android' ? 'md-' : 'ios-';
  return prefix + iconName;
}

/**
 *
 * @param totalEntries
 * @param entriesPerPage
 * @param currentPage
 * @returns {{pageNumber: *, last: *, totalPages: *, first: *}}
 */
function calculatePagingation(totalEntries, entriesPerPage, currentPage) {
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const first = currentPage === 0;
  const last = currentPage + 1 === totalPages;
  return {
    first,
    last,
    pageNumber: currentPage,
    totalPages
  };
}

export default {
  isConnectedToInternet,
  getIconForPlatform,
  calculatePagingation
};
