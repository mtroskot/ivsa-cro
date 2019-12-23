import React from 'react';
import { Text, View } from 'react-native';
import styles from 'src/screens/FloorPlan/FloorPlanInformation/styles';
import PropTypes from 'prop-types';

const FloorPlanInformation = ({ floorPlan }) => (
  <View style={styles.container}>
    <View style={styles.subContainer}>
      {floorPlan.map((item, index) => {
        return item.map((subItem, subIndex) => {
          // if subItem contains '-' we need to bold everything before '-'
          let indexOfMinus = subItem.indexOf('-');
          return (
            <Text key={`${index}.${subIndex}`} style={styles.text}>
              <Text style={styles.keyTextStyle}>{`${index + 1}. ${subItem.substring(0, indexOfMinus + 1)}`}</Text>
              <Text>{subItem.substring(indexOfMinus + 1)}</Text>
            </Text>
          );
        });
      })}
    </View>
  </View>
);

FloorPlanInformation.propTypes = {
  floorPlan: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired
};

export default React.memo(FloorPlanInformation);
