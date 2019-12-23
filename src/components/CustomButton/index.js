import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View, ViewPropTypes } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { dimensions } from 'src/styles';
import { AppUtils } from 'src/utils';

const { rem } = dimensions;

const CustomButton = props => {
  const { iconProps, tOpacityStyle, viewStyle, textStyle, iconStyle, text, onPress } = props;
  const buttonText = text ? <Text style={textStyle}>{text}</Text> : null;

  const buttonIcon = iconProps ? (
    <View style={iconStyle}>
      <Icon
        name={AppUtils.getIconForPlatform(iconProps.name)}
        size={iconProps.size || 30 * rem}
        color={iconProps.color}
      />
    </View>
  ) : null;

  let iconTextOrder = (
    <View style={viewStyle}>
      {iconProps && iconProps.rightSide ? (
        <>
          {buttonText}
          {buttonIcon}
        </>
      ) : (
        <>
          {buttonIcon}
          {buttonText}
        </>
      )}
    </View>
  );

  return (
    <TouchableOpacity style={tOpacityStyle} onPress={onPress}>
      {iconTextOrder}
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  iconOrText: function(props, propName, componentName) {
    if (!props.iconProps?.name && !props.text) {
      return new Error(`Icon or text is required in ${componentName}`);
    }
  },
  iconProps: PropTypes.exact({
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    rightSide: PropTypes.bool,
    color: PropTypes.string
  }),
  text: PropTypes.string,
  tOpacityStyle: ViewPropTypes.style,
  viewStyle: ViewPropTypes.style,
  // eslint-disable-next-line react/forbid-prop-types
  textStyle: PropTypes.object,
  iconStyle: ViewPropTypes.style,
  onPress: PropTypes.func.isRequired
};

export default React.memo(CustomButton);
