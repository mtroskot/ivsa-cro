import React from 'react';
import { Picker, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import DrawerActionButtons from 'src/components/navigation/SideDrawer/DrawerActionButtons';
import { connect } from 'react-redux';
import locales from 'src/constants/localization';
import { changeLocale } from 'src/store/actions/localeActions';
import { logout } from 'src/store/actions/userActions';
import { NavigationService } from 'src/services';
import PropTypes from 'prop-types';
import { userPropTypes } from 'src/constants/propTypes';
import { screenNames } from 'src/constants/navigation';
import { pickerItems } from 'src/constants/sideDrawer';
import styles from 'src/components/navigation/SideDrawer/styles';
import { getCurrLocale, getUserData } from 'src/store/selectors';

function renderUserInfo(isAuthenticated, displayName) {
  if (isAuthenticated) {
    return (
      <Text style={styles.user}>
        {locales.loggedInAs} {displayName}
      </Text>
    );
  }
  return null;
}

const SideDrawer = props => {
  const handleLanguageChange = language => {
    props.changeLocale(language);
  };

  const login = () => {
    NavigationService.navigate(screenNames.LOGIN);
  };

  const handleLogout = () => {
    props.logout();
  };

  const closeDrawer = () => {
    NavigationService.closeDrawer();
  };

  const { user, currLocale } = props;
  const { isAuthenticated, displayName } = user;
  return (
    <SafeAreaView style={styles.container}>
      {renderUserInfo(isAuthenticated, displayName)}
      <DrawerActionButtons {...{ isAuthenticated, handleLogout, login, closeDrawer }} />
      <Picker selectedValue={currLocale} style={styles.picker} onValueChange={handleLanguageChange}>
        {pickerItems.map(item => {
          return <Picker.Item key={item.value} label={item.label} value={item.value} />;
        })}
      </Picker>
    </SafeAreaView>
  );
};

SideDrawer.propTypes = {
  user: userPropTypes.isRequired,
  currLocale: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  changeLocale: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currLocale: getCurrLocale(state),
  user: getUserData(state)
});

const mapDispatchToProps = {
  changeLocale,
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideDrawer);
