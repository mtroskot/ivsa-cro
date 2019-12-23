import { StyleSheet } from 'react-native';
import { dimensions } from 'src/styles';

const { width, height, rem } = dimensions;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    marginTop: -100 * rem,
    marginBottom: -120 * rem,
    width: width,
    height: height
  }
});

export default styles;
