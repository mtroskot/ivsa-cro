import { StyleSheet, Platform } from 'react-native';
import { dimensions } from 'src/styles';
const { rem } = dimensions;

const styles = StyleSheet.create({
  dropdownLabel: {
    marginTop: 10 * rem,
    fontSize: 14 * rem
  },
  picker: {
    marginVertical: 20 * rem,
    height: Platform.OS === 'ios' ? 100 * rem : 50 * rem,
    overflow: 'hidden',
    justifyContent: 'center'
  }
});

export default styles;
