import { StyleSheet } from 'react-native';
import { dimensions } from 'src/styles';

const { rem } = dimensions;

const styles = StyleSheet.create({
  text: {
    marginLeft: 10 * rem,
    fontSize: 20 * rem,
    color: '#414347'
  }
});

export default styles;
