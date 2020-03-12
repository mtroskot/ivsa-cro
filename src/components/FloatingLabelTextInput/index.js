import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Animated, TextInput, View } from 'react-native';
import styles from 'src/components/FloatingLabelTextInput/styles';
import { dimensions } from 'src/styles';
import HooksUtils from 'src/utils/HooksUtils';

const { rem } = dimensions;
const minOffset = -5 * rem;
const FloatingLabelTextInput = ({
  value,
  onChangeText,
  floatingLabel,
  textInputRef,
  textInputStyle,
  customContainerStyle,
  placeholder,
  ...restProps
}) => {
  const [focused, setFocused] = useState(false);
  const [floatAnim] = useState(new Animated.Value(minOffset));
  const [maxOffset, setMaxOffset] = useState(minOffset);
  // RN has bug when component re-mounts, animation value is reset to initial value
  const [animValueFix, setAnimValueFix] = useState(null);

  HooksUtils.useDidUpdate(() => {
    if (value.length === 0) {
      Animated.timing(floatAnim, {
        toValue: focused ? maxOffset : minOffset,
        duration: 250,
        useNativeDriver: true
      }).start();
    }
  }, [focused]);

  HooksUtils.useDidUpdate(() => {
    if (value.length === 0 && focused) {
      setAnimValueFix(maxOffset);
    } else {
      setAnimValueFix(null);
    }
  }, [value]);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setAnimValueFix(null);
    setFocused(false);
  };

  return (
    <View
      onLayout={event => {
        const { height } = event.nativeEvent.layout;
        if (value.length === 0) {
          setMaxOffset(styles.floatingLabel.fontSize - height + 3);
        }
      }}
      style={[
        styles.container,
        customContainerStyle,
        { justifyContent: value.length === 0 && !placeholder ? 'flex-end' : 'flex-start' }
      ]}>
      {floatingLabel && (
        <Animated.Text
          style={
            value.length === 0 && !placeholder
              ? {
                  ...styles.floatingLabel,
                  transform: [{ translateY: animValueFix ? animValueFix : floatAnim }]
                }
              : { ...styles.floatingLabel }
          }>
          {floatingLabel}
        </Animated.Text>
      )}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        underlineColorAndroid="transparent"
        ref={textInputRef}
        style={[styles.defaultInput, textInputStyle]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...restProps}
      />
    </View>
  );
};

FloatingLabelTextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  floatingLabel: PropTypes.string,
  placeholder: PropTypes.string,
  textInputRef: PropTypes.shape({ current: PropTypes.any }),
  textInputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  customContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default React.memo(FloatingLabelTextInput);
