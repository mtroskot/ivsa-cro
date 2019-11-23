import React from 'react';
import {View, Text} from 'react-native';
import styles from 'src/screens/Home/styles';

const Home = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello World</Text>
        </View>
    );
};

export default Home;
