import React from 'react';
import { ActivityIndicator, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import styles from 'src/components/Loader/styles';

const Loader = props => {
  const { size, color, viewStyle } = props;
  return (
    <View style={[styles.container, viewStyle]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

Loader.propTypes = {
  viewStyle: ViewPropTypes.style,
  size: PropTypes.string,
  color: PropTypes.string
};

Loader.defaultProps = {
  size: 'large',
  color: '#1e5ad4'
};

export default React.memo(Loader);
