import React from 'react';
import { Image, Text, TouchableOpacity, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

const ListItem = props => {
  const { tOpacityStyle, text, textStyle, imageProps, onPress } = props;
  return (
    <TouchableOpacity style={tOpacityStyle} onPress={onPress} hitSlop={{ top: 15, left: 20, bottom: 15, right: 300 }}>
      <Text style={textStyle}>{text}</Text>
      {imageProps?.imageSource ? <Image style={imageProps.imageStyle} source={imageProps.imageSource} /> : null}
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  tOpacityStyle: ViewPropTypes.style,
  text: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  textStyle: PropTypes.object.isRequired,
  imageProps: PropTypes.exact({
    imageSource: PropTypes.number.isRequired,
    imageStyle: PropTypes.object.isRequired
  }),
  onPress: PropTypes.func.isRequired
};

export default React.memo(ListItem);
