import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { PersistGate } from 'redux-persist/lib/integration/react';
import AppContainer from 'src/navigation';
import { NavigationService } from 'src/services';
import store, { getPersistor } from 'src/store';
import { PopupMessage } from 'src/components';

const persistor = getPersistor();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} forceInset={{ top: 'never' }}>
          <PersistGate loading={null} persistor={persistor} bootstrapped={true}>
            <AppContainer ref={ref => NavigationService.setTopLevelNavigator(ref)} />
            <PopupMessage />
          </PersistGate>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
