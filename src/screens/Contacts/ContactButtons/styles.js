import { StyleSheet } from 'react-native';
import { dimensions } from 'src/styles';
const { rem } = dimensions;

const styles = StyleSheet.create({
  buttonsInline: {
    flexDirection: 'row',
    marginLeft: 'auto'
  },
  customButtonIconStyle: {
    marginRight: 10 * rem
  }
});

export default styles;
