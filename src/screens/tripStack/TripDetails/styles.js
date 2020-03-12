import { Platform, StyleSheet } from 'react-native';
import { dimensions } from 'src/styles';

const { rem } = dimensions;

const styles = StyleSheet.create({
  scrollView: {
    alignItems: 'center'
  },
  textContainer: {
    width: '90%',
    marginTop: 20 * rem
  },
  text: {
    fontSize: 18 * rem,
    color: '#161616',
    fontFamily: Platform.OS === 'ios' ? 'Gill Sans' : 'sans-serif'
  }
});

export default styles;
