import React from 'react';
import { Picker, Text, View } from 'react-native';
import locales from 'src/constants/localization';
import { pickerItems } from 'src/constants/map';
import PropTypes from 'prop-types';
import styles from 'src/screens/Map/PickerLocations/styles';

const PickerLocations = props => {
  const { selectedOption, handlePickerChange } = props;
  return (
    <View>
      <Text style={styles.dropdownLabel}>{locales.mapDropdownLabel}</Text>
      <Picker selectedValue={selectedOption} style={styles.picker} onValueChange={handlePickerChange}>
        {pickerItems.map(item => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
};

PickerLocations.propTypes = {
  selectedOption: PropTypes.number.isRequired,
  handlePickerChange: PropTypes.func.isRequired
};

export default React.memo(PickerLocations);
