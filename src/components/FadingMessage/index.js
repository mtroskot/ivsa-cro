import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Animated, Text } from 'react-native';
import { StringUtils } from 'src/utils';
import { popupMesssagePropTypes } from 'src/constants/propTypes';
import styles from 'src/components/FadingMessage/styles';

const popupAnimation = new Animated.Value(0);
const PopupMesssage = props => {
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      Animated.timing(popupAnimation, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true
      }).start();
      setTimeout(() => {
        Animated.timing(popupAnimation, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true
        }).start();
      }, 1500);
    }
  }, [props.popupMessage]);

  const { message, position } = props.popupMessage;
  const positionStyle = position === 'top' ? styles.topPosition : styles.bottomPosition;
  if (StringUtils.isEmpty(message)) {
    return null;
  }
  return (
    <Animated.View style={[styles.popupMessageView, positionStyle, { opacity: popupAnimation }]}>
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

PopupMesssage.propTypes = {
  popupMessage: popupMesssagePropTypes.isRequired
};
PopupMesssage.defaultProps = {
  position: 'top'
};
const mapStateToProps = state => ({
  popupMessage: state.ui.popupMessage
});
export default connect(
  mapStateToProps,
  null
)(React.memo(PopupMesssage));
