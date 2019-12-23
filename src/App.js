import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { PersistGate } from 'redux-persist/lib/integration/react';
import AppContainer from 'src/services/navigation/Navigator';
import { NavigationService } from 'src/services';
import store, { getPersistor } from 'src/store';
import { FadingMessage } from 'src/components';

const persistor = getPersistor();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container} forceInset={{ top: 'never' }}>
        <PersistGate loading={null} persistor={persistor} bootstrapped={true}>
          <AppContainer ref={ref => NavigationService.setTopLevelNavigator(ref)} />
          <FadingMessage />
        </PersistGate>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
