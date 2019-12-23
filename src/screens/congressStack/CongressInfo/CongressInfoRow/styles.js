import { StyleSheet } from 'react-native';
import { dimensions } from 'src/styles';
const { rem } = dimensions;

const styles = StyleSheet.create({
  text: {
    fontSize: 20 * rem,
    color: 'black',
    margin: 5 * rem,
    flexShrink: 1
  },
  iconTextView: {
    flexDirection: 'row'
  },
  iconView: {
    margin: 5 * rem,
    marginTop: 10 * rem
  }
});

export default styles;
