import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppUtils } from 'src/utils';
import { icons } from 'src/constants/icons';
import PropTypes from 'prop-types';
import styles from 'src/screens/congressStack/CongressInfo/CongressInfoRow/styles';

const CongressInfoRow = props => {
  const { congressSchedule } = props;
  return (
    <View style={styles.iconTextView}>
      <View style={styles.iconView}>
        <Icon name={AppUtils.getIconForPlatform(icons.DROPRIGHT)} size={20} color="black" />
      </View>
      <Text style={styles.text}>{congressSchedule}</Text>
    </View>
  );
};

CongressInfoRow.propTypes = {
  congressSchedule: PropTypes.string.isRequired
};

export default React.memo(CongressInfoRow);
