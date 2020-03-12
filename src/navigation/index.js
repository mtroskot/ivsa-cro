import React from 'react';
import { Platform } from 'react-native';
import { IconButton } from 'src/components';
import SideDrawer from 'src/screens/SideDrawer';
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
import iconStyles from 'src/components/IconButton/styles';

const RootStack = createStackNavigator(
  {
    [screenNames.MENU]: {
      screen: MenuScreen,
      navigationOptions: () => ({
        title: locales.menu,
        headerLeft: () => (
          <IconButton imageStyle={iconStyles.leftButton} iconName={icons.MENU} onPress={NavigationService.openDrawer} />
        )
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
          <IconButton
            imageStyle={iconStyles.leftButton}
            iconName={icons.BACK_ICON}
            onPress={NavigationService.goBackAndOpenDrawer}
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
    defaultNavigationOptions: {
      headerBackTitleVisible: false,
      headerMode: 'screen',
      headerStyle: {
        // height: 50,
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
