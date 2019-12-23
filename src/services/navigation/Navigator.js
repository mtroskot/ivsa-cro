import React from 'react';
import { Platform } from 'react-native';
import { HeaderLeftButton, SideDrawer } from 'src/components';
import CongressScreen from 'src/screens/congressStack/Congress';
import CongressInfoScreen from 'src/screens/congressStack/CongressInfo';
import ContactsScreen from 'src/screens/Contacts';
import MapScreen from 'src/screens/Map';
import MenuScreen from 'src/screens/Menu';
import NewsScreen from 'src/screens/newsStack/News';
import PublishNewsScreen from 'src/screens/newsStack/PublishNews';
import FloorPlanScreen from 'src/screens/FloorPlan';
import LoginScreen from 'src/screens/Login';
import TripDetailsScreen from 'src/screens/tripStack/TripDetails';
import TripMenuScreen from 'src/screens/tripStack/TripMenu';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { screenNames } from 'src/constants/navigation';
import { icons } from 'src/constants/icons';
import locales from 'src/constants/localization';
import { NavigationService } from 'src/services/index';

const RootStack = createStackNavigator(
  {
    [screenNames.MENU]: {
      screen: MenuScreen,
      navigationOptions: () => ({
        title: locales.menu
      })
    },
    [screenNames.MAP]: {
      screen: MapScreen,
      navigationOptions: () => ({
        title: locales.map
      })
    },
    [screenNames.CONGRESS]: {
      screen: CongressScreen,
      navigationOptions: () => ({
        title: locales.congressProgram
      })
    },
    [screenNames.CONGRESS_INFO]: {
      screen: CongressInfoScreen
    },
    [screenNames.CONTACTS]: {
      screen: ContactsScreen,
      navigationOptions: () => ({
        title: locales.contacts
      })
    },
    [screenNames.NEWS]: {
      screen: NewsScreen,
      navigationOptions: () => ({
        title: locales.newsBoard
      })
    },
    [screenNames.NEWS_PUBLISH]: {
      screen: PublishNewsScreen,
      navigationOptions: () => ({
        title: locales.publishNews
      })
    },
    [screenNames.FLOOR_PLAN]: {
      screen: FloorPlanScreen,
      navigationOptions: () => ({
        title: locales.floorPlan
      })
    },
    [screenNames.LOGIN]: {
      screen: LoginScreen,
      navigationOptions: () => ({
        title: locales.login,
        headerLeft: () => (
          <HeaderLeftButton
            iconName={icons.BACK_ICON}
            onPress={() => {
              NavigationService.goBack();
              NavigationService.openDrawer();
            }}
          />
        )
      })
    },
    [screenNames.TRIP_DETAILS]: {
      screen: TripDetailsScreen
    },
    [screenNames.TRIP_MENU]: {
      screen: TripMenuScreen,
      navigationOptions: () => ({
        title: locales.tripDescription
      })
    }
  },
  {
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerMode: 'screen',
      headerStyle: {
        // backgroundColor: '#f4511e'
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontFamily: Platform.OS === 'ios' ? 'Gill Sans' : 'sans-serif',
        fontWeight: 'bold'
      }
    }
  }
);

RootStack.navigationOptions = ({ navigation }) => {
  let drawerLockMode = 'unlocked';
  if (navigation.state.index > 0) {
    drawerLockMode = 'locked-closed';
  }
  return {
    drawerLockMode
  };
};

const Navigator = createDrawerNavigator(
  {
    ROOT_STACK: RootStack
  },
  {
    contentComponent: SideDrawer
  }
);

export default createAppContainer(Navigator);
