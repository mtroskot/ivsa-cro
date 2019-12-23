import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import styles from 'src/components/DefaultInput/styles';

const DefaultInput = props => {
  const { onSubmitEditing, textInputRef } = props;
  // TODO refactor spread props
  return (
    <TextInput
      underlineColorAndroid="transparent"
      ref={textInputRef}
      onSubmitEditing={onSubmitEditing}
      {...props}
      style={[styles.default, props.style]}
    />
  );
};

DefaultInput.propTypes = {
  onSubmitEditing: PropTypes.func,
  textInputRef: PropTypes.shape({ current: PropTypes.elementType }),
};

export default React.memo(DefaultInput);
