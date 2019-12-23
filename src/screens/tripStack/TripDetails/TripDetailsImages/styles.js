import { StyleSheet } from 'react-native';
import { dimensions } from 'src/styles';

const { width, rem } = dimensions;

const styles = StyleSheet.create({
  image: {
    width: width,
    height: width / 2,
    marginVertical: 20 * rem
  }
});

export default styles;
