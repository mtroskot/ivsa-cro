import React from 'react';
import {Provider} from 'react-redux';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import navigation from 'src/services/navigation';
import Navigator from 'src/services/navigation/Navigator';
import store from 'src/store';

const AppContainer = createAppContainer(Navigator);

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <AppContainer ref={ref => navigation.setTopLevelNavigator(ref)}/>
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
