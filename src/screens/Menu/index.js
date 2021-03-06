import React, { useCallback } from 'react';
import { Linking, ScrollView, View } from 'react-native';
import MenuButtons from 'src/screens/Menu/MenuButtons';
import { IconButton } from 'src/components';
import { connect } from 'react-redux';
// import OneSignal from 'react-native-onesignal';
// import { ONESIGNAL_APP_ID } from 'src/constants/keys';
import { AppUtils } from 'src/utils';
import { ApiService, NavigationService } from 'src/services';
import { screenNames } from 'src/constants/navigation';
import { icons } from 'src/constants/icons';
import { menuList } from 'src/constants/menu';
import PropTypes from 'prop-types';
import styles from 'src/screens/Menu/styles';
import { currLocaleSelector } from 'src/store/selectors';
import { bookletRequests } from 'src/services/api';

const Menu = props => {
  // constructor(props) {
  //   super(props);
  //   // this.sideDrawerVisible = false;
  //   // OneSignal.init(ONESIGNAL_APP_ID);
  //   // OneSignal.addEventListener('opened', this.onOpened);
  //   // OneSignal.inFocusDisplaying(2);
  // }

  const goToBooklet = useCallback(async () => {
    try {
      const bookletUrl = await ApiService.callApiAndCheckResponse(bookletRequests.getBookletUrl());
      if (bookletUrl) {
        Linking.openURL(bookletUrl);
      } else {
        alert('Could not open booklet\nTry again later');
      }
    } catch (error) {
      console.log('Menu goToBooklet error', error);
    }
  }, []);

  const onMenuPress = useCallback(
    menuId => {
      switch (menuId) {
        case screenNames.NEWS:
          NavigationService.navigate(screenNames.NEWS);
          break;
        case screenNames.CONGRESS:
          NavigationService.navigate(screenNames.CONGRESS);
          break;
        case screenNames.MAP:
          NavigationService.navigate(screenNames.MAP);
          break;
        case screenNames.TRIP_MENU:
          NavigationService.navigate(screenNames.TRIP_MENU);
          break;
        case screenNames.FLOOR_PLAN:
          NavigationService.navigate(screenNames.FLOOR_PLAN);
          break;
        case screenNames.CONTACTS:
          NavigationService.navigate(screenNames.CONTACTS);
          break;
        case 'booklet':
          goToBooklet();
          break;
      }
    },
    [goToBooklet]
  );

  // onNotificationOpen = openResult => {
  //   let noticeId = openResult.notification.payload.additionalData
  //     ? openResult.notification.payload.additionalData.noticeId
  //     : undefined;
  //   // pushToNewScreen(this.props.componentId, NEWS_BOARD_NAME, locales.newsBoard, );
  //   NavigationService.navigate(screenNames.NEWS, { keyFromNotification: noticeId });
  // };

  // componentWillUnmount() {
  //   OneSignal.removeEventListener('opened', this.onNotificationOpen);
  // }
  //RENDER
  const { currLocale } = props;
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <ScrollView bounces={false}>
          <MenuButtons onPress={onMenuPress} menuList={menuList} currLocale={currLocale} />
        </ScrollView>
      </View>
    </View>
  );
};

Menu.propTypes = {
  currLocale: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  currLocale: currLocaleSelector(state)
});

export default connect(
  mapStateToProps,
  null
)(Menu);
