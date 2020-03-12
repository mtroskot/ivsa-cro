import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Animated, Text } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import { HooksUtils, StringUtils } from 'src/utils';
import { popupMessagePropTypes } from 'src/constants/propTypes';
import styles from 'src/components/PopupMessage/styles';

let handler = null;
const PopupMessage = ({ popupMessage }) => {
  const [popupAnimation] = useState(new Animated.Value(0));
  const insets = useSafeArea();

  HooksUtils.useDidUpdate(
    () => {
      Animated.timing(popupAnimation, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true
      }).start();
      handler = setTimeout(() => {
        Animated.timing(popupAnimation, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true
        }).start();
      }, 1500);
    },
    [popupMessage],
    () => {
      clearTimeout(handler);
      Animated.timing(popupAnimation).stop();
    }
  );

  const { message, position } = popupMessage;
  if (StringUtils.isEmpty(message)) {
    return null;
  }
  const positionStyle =
    position === 'top'
      ? { top: styles.topPosition.top + insets.top }
      : { bottom: styles.bottomPosition.bottom + insets.bottom };
  return (
    <Animated.View style={[styles.popupMessageView, positionStyle, { opacity: popupAnimation }]}>
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

PopupMessage.propTypes = {
  popupMessage: popupMessagePropTypes.isRequired
};
PopupMessage.defaultProps = {
  position: 'top'
};
const mapStateToProps = state => ({
  popupMessage: state.ui.popupMessage
});
export default connect(
  mapStateToProps,
  null
)(React.memo(PopupMessage));
