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
  requestInProgress: PropTypes.bool,
  error: PropTypes.string
});

export const newsPropTypes = PropTypes.exact({
  key: PropTypes.string,
  date: PropTypes.string,
  publishedBy: PropTypes.string,
  notice: PropTypes.string
});

export const popupMesssagePropTypes = PropTypes.exact({
  message: PropTypes.string,
  position: PropTypes.oneOf(['bottom', 'top'])
});
