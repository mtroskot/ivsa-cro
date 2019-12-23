import { StyleSheet } from 'react-native';
import { dimensions } from 'src/styles';
const { rem } = dimensions;

const styles = StyleSheet.create({
  annotationContainer: {
    width: 30 * rem,
    height: 30 * rem,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15 * rem
  },
  annotationFill: {
    width: 30 * rem,
    height: 30 * rem,
    borderRadius: 15 * rem,
    backgroundColor: 'orange',
    transform: [{ scale: 0.6 }]
  }
});

export default styles;
