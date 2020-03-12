import PropTypes from 'prop-types';

export const iconPropTypes = PropTypes.exact({
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rightSide: PropTypes.bool,
  size: PropTypes.number
});

export const userPropTypes = PropTypes.exact({
  isAuthenticated: PropTypes.bool,
  displayName: PropTypes.string,
  email: PropTypes.string,
  idToken: PropTypes.string,
  expiryDate: PropTypes.string
});

export const userReducerPropTypes = PropTypes.exact({
  userData: userPropTypes,
  error: PropTypes.string
});

export const newsPropTypes = PropTypes.exact({
  date: PropTypes.string.isRequired,
  notice: PropTypes.string.isRequired,
  publishedBy: PropTypes.string.isRequired
});
export const newsReducerPropTypes = PropTypes.exact({
  cachedNews: PropTypes.objectOf(newsPropTypes).isRequired,
  lastUpdate: PropTypes.number.isRequired,
  error: PropTypes.string
});

export const popupMessagePropTypes = PropTypes.exact({
  message: PropTypes.string,
  position: PropTypes.oneOf(['bottom', 'top'])
});
