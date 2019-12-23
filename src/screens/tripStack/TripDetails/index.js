import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import TripDetailsImages from 'src/screens/tripStack/TripDetails/TripDetailsImages';
import styles from 'src/screens/tripStack/TripDetails/styles';

const TripDetails = props => {
  const { images, tripText } = props.navigation.state.params;
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{tripText}</Text>
      </View>
      <TripDetailsImages images={images} />
    </ScrollView>
  );
};

TripDetails.navigationOptions = screenProps => ({
  title: screenProps.navigation.getParam('headerTitle')
});

export default TripDetails;
