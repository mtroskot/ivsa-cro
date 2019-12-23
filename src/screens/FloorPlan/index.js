import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import FloorPlanInformation from 'src/screens/FloorPlan/FloorPlanInformation';
import floorPlanImage from 'src/assets/images/floorPlan/tlocrt.jpg';
import { floorPlan } from 'src/constants/floorPlan';
import styles from 'src/screens/FloorPlan/styles';

const FloorPlan = props => (
  <View style={styles.container}>
    <ScrollView>
      <Image style={styles.image} source={floorPlanImage} resizeMode={'contain'} />
      <FloorPlanInformation floorPlan={floorPlan} />
    </ScrollView>
  </View>
);

export default React.memo(FloorPlan);
