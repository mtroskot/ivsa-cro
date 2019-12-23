import { NavigationActions, StackActions } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function addListener(event, callback) {
  navigator.addListener(event, callback);
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

function push(routeName, params) {
  navigator.dispatch(
    StackActions.push({
      routeName,
      params
    })
  );
}

function reset(routeName, params) {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName,
        params
      })
    ]
  });

  navigator.dispatch(resetAction);
}

function popToTop() {
  navigator.dispatch(StackActions.popToTop());
}

function goBack() {
  navigator.dispatch(NavigationActions.back());
}

function closeDrawer() {
  navigator.dispatch(DrawerActions.closeDrawer());
}

function openDrawer() {
  navigator.dispatch(DrawerActions.openDrawer());
}

function getCurrentRoute() {
  let route = navigator.state.nav;
  while (route.routes) {
    route = route.routes[route.index];
  }
  return route;
}

// add other navigation functions that you need and export them
export default {
  setTopLevelNavigator,
  addListener,
  navigate,
  push,
  reset,
  popToTop,
  goBack,
  getCurrentRoute,
  closeDrawer,
  openDrawer
};
