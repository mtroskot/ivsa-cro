import { StyleSheet } from 'react-native';
import { dimensions } from 'src/styles';

const { width } = dimensions;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: width,
    height: 600
  }
});

export default styles;
