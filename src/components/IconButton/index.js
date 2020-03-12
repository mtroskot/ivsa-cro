import React from 'react';
import { TouchableOpacity, ViewPropTypes } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { AppUtils } from 'src/utils';
import { dimensions } from 'src/styles';
const { rem } = dimensions;

const IconButton = ({ iconName, onPress, disabled, viewStyle, imageStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={viewStyle}
      disabled={disabled}
      hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}>
      <Icon name={AppUtils.getIconForPlatform(iconName)} style={imageStyle} size={30 * rem} />
    </TouchableOpacity>
  );
};

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  viewStyle: ViewPropTypes.style,
  imageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default React.memo(IconButton);
