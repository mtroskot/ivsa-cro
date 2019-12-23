import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import CustomButton from 'src/components/CustomButton';
import { icons } from 'src/constants/icons';
import locales from 'src/constants/localization';
import styles from 'src/components/navigation/SideDrawer/DrawerActionButtons/styles';

const DrawerActionButtons = ({ isAuthenticated, handleLogout, login, closeDrawer }) => {
  return (
    <View>
      <CustomButton
        viewStyle={styles.drawerItem}
        iconStyle={styles.drawerItemIcon}
        iconProps={{ name: icons.CLOSE, color: '#aaa' }}
        text={locales.close}
        onPress={closeDrawer}
      />
      <CustomButton
        viewStyle={styles.drawerItem}
        iconStyle={styles.drawerItemIcon}
        iconProps={{ name: icons.LOGOUT, color: '#aaa' }}
        onPress={isAuthenticated ? handleLogout : login}
        text={isAuthenticated ? locales.logout : locales.login}
      />
    </View>
  );
};

DrawerActionButtons.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  closeDrawer: PropTypes.func.isRequired
};

export default React.memo(DrawerActionButtons);
