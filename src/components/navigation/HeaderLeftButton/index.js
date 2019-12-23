import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppUtils } from 'src/utils';
import PropTypes from 'prop-types';
import styles from 'src/components/navigation/HeaderLeftButton/styles';

const HeaderLeftButton = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.backButton}>
      <Icon name={AppUtils.getIconForPlatform(iconName)} size={30} />
    </TouchableOpacity>
  );
};

HeaderLeftButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default React.memo(HeaderLeftButton);
